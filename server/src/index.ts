import * as dotenv from 'dotenv';
dotenv.config();

import logger from './logger';
import app from './app';

const port = app.get('port');
const server = app.listen(port);

if (process.env.NODE_ENV === 'production') {
  process.on('unhandledRejection', (reason, p) => {
    logger.error('Unhandled Rejection: ', p, reason);
    process.exit(1);
  });

  process.on('uncaughtException', e => {
    logger.error('Unhandled Exception: ', e);
    process.exit(1);
  });
}

server.on('listening', () =>
  logger.info(
    'Feathers application started on http://%s:%d',
    app.get('host'),
    port
  )
);
