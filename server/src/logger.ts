import { createLogger, format, transports } from 'winston';

// Configure the Winston logger. For the complete documentation see https://github.com/winstonjs/winston
const logger = createLogger({
  // To see more detailed errors, change this to 'debug'
  level: 'info',
  format: format.combine(format.splat(), format.simple()),
  transports: [
    new transports.Console(),
    new transports.File({
      level: 'info',
      dirname: 'logs',
      filename: 'scrappers.log',
      options: { flags: 'w' },
      handleExceptions: true,
      tailable: true,
      maxsize: 10
    })
  ]
});

export default logger;
