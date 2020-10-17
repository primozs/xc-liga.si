import { CronJob } from 'cron';
import logger from '../../../logger';

export const set1MinJob = <T>(fn: () => Promise<void>) => {
  let isRunning = false;

  const job = new CronJob({
    cronTime: '0 */1 * * * *',
    onTick: function () {
      if (!isRunning) {
        isRunning = true;

        fn()
          .then(res => {
            return res;
          })
          .then(() => {
            isRunning = false;
          })
          .catch(err => {
            logger.error(err);
            isRunning = false;
          });
      }
    },
    timeZone: 'UTC'
  });

  return job;
};

export const set10minJob = (fn: () => Promise<void>) => {
  let isRunning = false;

  const job = new CronJob({
    cronTime: '0 */10 * * * *',
    onTick: function () {
      if (!isRunning) {
        isRunning = true;

        fn()
          .then(res => {
            isRunning = false;
          })
          .catch(err => {
            logger.error(err);
            isRunning = false;
          });
      }
    },
    timeZone: 'UTC'
  });

  return job;
};
