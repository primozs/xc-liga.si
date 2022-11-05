import { Params } from '@feathersjs/feathers';
import { CronJob } from 'cron';
import { Application } from '../../declarations';
import logger from '../../logger';
import { Moment } from 'moment';
import { set5minAfterHJob } from './jobs/jobs';
import {
  apiGetResults,
  apiGetPilots,
  getResults2020,
  getResults2021,
  getResults2022
} from './getResults';

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

const GET_DATA_JOB = 'GET_DATA_JOB';

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

const updatePilots = async (app: Application) => {
  const apiConf = app.get('api');
  const apiPilotsUrl = apiConf.pilots || '';
  if (!apiPilotsUrl) return;

  const pilots = await apiGetPilots(apiPilotsUrl);
  if (!pilots) return;

  const promises = [];
  for (const { id, ...rest } of pilots) {
    const promise = app.service('pilots').create({ _id: id, ...rest });
    promises.push(promise);
  }
  return Promise.all(promises);
};

const updateScore2020 = async (app: Application) => {
  const pilots = await app.service('pilots').find({ paginate: false });
  const lastUpdate = new Date('2020-09-30T23:59:59Z').getTime();
  const resultsData = getResults2020(pilots);
  const { results, noPilots, totalNoFlights, totalSeasonDist } = resultsData;

  await app.service('seasons').create({
    _id: '2019-2020',
    season: '2019-2020',
    noPilots,
    totalNoFlights,
    totalSeasonDist,
    lastUpdate
  });

  for (const { pilot, ...rest } of results) {
    await app.service('scores').create({
      season: '2019-2020',
      pilotId: pilot,
      ...rest
    });
  }

  // cleanup
  const scores = await app
    .service('scores')
    .find({ query: { season: '2019-2020' }, paginate: false });

  for (const score of scores) {
    const found = resultsData.results.find(result => {
      return result.pilot === score.pilotId;
    });
    if (!found) {
      app.service('scores').remove(score._id);
    }
  }
};

const updateScore2021 = async (app: Application) => {
  const lastUpdate = new Date('2021-09-30T23:59:59Z').getTime();
  const resultsData = getResults2021();
  const { results, noPilots, totalNoFlights, totalSeasonDist } = resultsData;

  await app.service('seasons').create({
    _id: '2020-2021',
    season: '2020-2021',
    noPilots,
    totalNoFlights,
    totalSeasonDist,
    lastUpdate
  });

  for (const { pilot, ...rest } of results) {
    await app.service('scores').create({
      season: '2020-2021',
      pilotId: pilot,
      ...rest
    });
  }

  // cleanup
  const scores = await app
    .service('scores')
    .find({ query: { season: '2020-2021' }, paginate: false });

  for (const score of scores) {
    const found = resultsData.results.find(result => {
      return result.pilot === score.pilotId;
    });
    if (!found) {
      app.service('scores').remove(score._id);
    }
  }
};

const updateScore2022 = async (app: Application) => {
  const pilots = await app.service('pilots').find({ paginate: false });
  const lastUpdate = new Date('2022-09-30T23:59:59Z').getTime();
  const resultsData = await getResults2022(pilots);
  const { results, noPilots, totalNoFlights, totalSeasonDist } = resultsData;

  await app.service('seasons').create({
    _id: '2021-2022',
    season: '2021-2022',
    noPilots,
    totalNoFlights,
    totalSeasonDist,
    lastUpdate
  });

  for (const { pilot, ...rest } of results) {
    await app.service('scores').create({
      season: '2021-2022',
      pilotId: pilot,
      ...rest
    });
  }

  // cleanup
  const scores = await app
    .service('scores')
    .find({ query: { season: '2021-2022' }, paginate: false });

  for (const score of scores) {
    const found = resultsData.results.find(result => {
      return result.pilot === score.pilotId;
    });
    if (!found) {
      app.service('scores').remove(score._id);
    }
  }
};

const updateScore = async (app: Application) => {
  const apiConf = app.get('api');
  const apiResultsUrl = apiConf.results || '';
  const pilots = await app.service('pilots').find({ paginate: false });

  const resultsData = await apiGetResults(apiResultsUrl, pilots);
  if (!resultsData) return;

  const { results, noPilots, totalNoFlights, totalSeasonDist } = resultsData;
  const season = getSeason(new Date());
  const lastUpdate = new Date().getTime();

  await app.service('seasons').create({
    _id: season,
    season,
    noPilots,
    totalNoFlights,
    totalSeasonDist,
    lastUpdate
  });

  for (const { pilot, ...rest } of results) {
    await app.service('scores').create({
      season,
      pilotId: pilot,
      ...rest
    });
  }

  // cleanup
  const scores = await app
    .service('scores')
    .find({ query: { season }, paginate: false });

  for (const score of scores) {
    const found = resultsData.results.find(result => {
      return result.pilot === score.pilotId;
    });
    if (!found) {
      app.service('scores').remove(score._id);
    }

    if (score.name === '') {
      app.service('scores').remove(score._id);
    }
  }
};

const getDataJob = (app: Application) => async (): Promise<void> => {
  await updatePilots(app);
  await updateScore2020(app);
  await updateScore2021(app);
  await updateScore2022(app);
  await updateScore(app);
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
      jobFns[GET_DATA_JOB] = getDataJob(app);
      const arsoWSJob = set5minAfterHJob(jobFns[GET_DATA_JOB]);
      jobs[GET_DATA_JOB] = arsoWSJob;

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
