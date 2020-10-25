import { Params } from '@feathersjs/feathers';
import { CronJob } from 'cron';
import { Application } from '../../declarations';
import logger from '../../logger';
import { Moment } from 'moment';
import { set5minAfterHJob } from './jobs/jobs';
import { getResultsApiJob, transformResults } from '../results/getResults';
import results2020 from '../results/lzs2019-2020.json';

type Status = {
  name: string;
  isRunning?: boolean;
  nexTime: Moment | Date | null;
};

type Action = 'start' | 'stop' | 'run';
type SchedulerAction = {
  action: Action;
  key?: string;
};

const jobs: Record<string, CronJob> = {};
const jobFns: Record<string, () => Promise<void>> = {};

process.once('SIGTERM', () => {
  Object.entries(jobs).forEach(([name, cronJob]) => {
    if (cronJob.running) cronJob.stop();
  });
});

const GET_RESULTS_JOB = 'GET_RESULTS_JOB';

const getSeason = (date: Date) => {
  const dateTime = date.getTime();
  const year = new Date().getFullYear();
  const seasonEnd = new Date(`${year}-09-30T23:59:59Z`).getTime();
  if (dateTime < seasonEnd) {
    return `${year - 1}-${year}`;
  } else {
    return `${year}-${year + 1}`;
  }
};

const getResultsJob = (app: Application) => async (): Promise<void> => {
  const apiConf = app.get('api');
  const apiResultsUrl = apiConf.results || '';

  // 2019-2020
  const results2020Db = await app.service('results').find({
    query: { season: '2019-2020' },
    paginate: false
  });

  if (results2020Db.length === 0) {
    const resultsData = transformResults(results2020);
    const { results, noPilots, totalNoFlights, totalSeasonDist } = resultsData;
    if (resultsData) {
      const lastUpdate = new Date('2020-09-30T23:59:59Z').getTime();
      await app.service('results').create({
        season: '2019-2020',
        results: results,
        noPilots,
        totalNoFlights,
        totalSeasonDist,
        lastUpdate
      });
    }
  }

  const resultsData = await getResultsApiJob(apiResultsUrl);
  let season = getSeason(new Date());

  const resultsDb = await app.service('results').find({
    query: { season },
    paginate: false
  });

  const lastUpdate = new Date().getTime();

  // new data
  if (resultsDb.length !== 0 && resultsDb[0] && resultsData) {
    const { results, noPilots, totalNoFlights, totalSeasonDist } = resultsData;
    const resultDb = resultsDb[0];
    const id = resultDb._id;
    await app.service('results').update(id, {
      _id: id,
      season,
      results,
      noPilots,
      totalNoFlights,
      totalSeasonDist,
      lastUpdate
    });
  }

  if (resultsDb.length === 0 && resultsData) {
    const { results, noPilots, totalNoFlights, totalSeasonDist } = resultsData;
    await app.service('results').create({
      season,
      results,
      noPilots,
      totalNoFlights,
      totalSeasonDist,
      lastUpdate
    });
  }
};

const startJobs = (key?: string): Status[] => {
  try {
    if (key && jobs[key]) {
      if (!jobs[key].running) jobs[key].start();
      const isRunning = !!jobs[key].running;
      return [{ name: key || '', isRunning, nexTime: null }];
    } else {
      Object.entries(jobs).forEach(([name, job]) => {
        if (!job.running) job.start();
      });
      const status = Object.entries(jobs).map(([name, job]) => {
        return { name, isRunning: job.running, nexTime: job.nextDates() };
      });
      return status;
    }
  } catch (e) {
    return [{ name: key || '', isRunning: false, nexTime: null }];
  }
};

const stopJob = (key?: string): Status[] => {
  try {
    if (key && jobs[key]) {
      if (jobs[key].running) jobs[key].stop();
      return [{ name: key || '', isRunning: false, nexTime: null }];
    } else {
      Object.entries(jobs).forEach(([name, job]) => {
        if (job.running) job.stop();
      });
      const status = Object.entries(jobs).map(([name, job]) => {
        return { name, isRunning: job.running, nexTime: job.nextDates() };
      });
      return status;
    }
  } catch (e) {
    return [{ name: key || '', isRunning: false, nexTime: null }];
  }
};

const runJob = async (key: string): Promise<any> => {
  try {
    if (key && jobFns[key]) {
      const data = await jobFns[key]();

      return data;
    }
    return null;
  } catch (e) {
    return null;
  }
};

export default class Scheduler {
  app: Application;

  constructor(app: Application) {
    this.app = app;

    try {
      jobFns[GET_RESULTS_JOB] = getResultsJob(app);
      const arsoWSJob = set5minAfterHJob(jobFns[GET_RESULTS_JOB]);
      jobs[GET_RESULTS_JOB] = arsoWSJob;

      startJobs();
    } catch (err) {
      logger.error(err);
    }
  }

  async find(params?: Params): Promise<Status[]> {
    try {
      const status = Object.entries(jobs).map(([name, job]) => {
        return { name, isRunning: !!job.running, nexTime: job.nextDates() };
      });
      return status;
    } catch (e) {
      return [];
    }
  }

  async create(
    data: SchedulerAction,
    params?: Params
  ): Promise<Status[] | any> {
    if (data.action === 'start') {
      return startJobs(data.key);
    }

    if (data.action === 'stop') {
      return stopJob(data.key);
    }

    if (data.action === 'run' && data.key) {
      return runJob(data.key);
    }

    return [];
  }
}
