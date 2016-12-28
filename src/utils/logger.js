import winston from 'winston';

const tsFormat = new Date().toLocaleTimeString();

/**
 * Create new winston logger.
 */
const logger = new (winston.Logger)({
  transports: [
    new winston.transports.Console({
      timestamp: tsFormat,
      colorize: true,
      level: 'info'
    })
  ]
});

export default logger;
