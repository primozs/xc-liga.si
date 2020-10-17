import { Params } from '@feathersjs/feathers';
import { CronJob } from 'cron';
import { Application } from '../../declarations';
import logger from '../../logger';
import { Moment } from 'moment';
import { set1MinJob } from './jobs/jobs';

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

const getResultsJob = (app: Application) => async (): Promise<void> => {
  // const data = await scrapeArsoStations();
  // await storeStationsData(app)(data || []);
  console.log('JOB');
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
      const arsoWSJob = set1MinJob(jobFns[GET_RESULTS_JOB]);
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
