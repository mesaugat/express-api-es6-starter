import fs from 'fs';
import winston from 'winston';
import 'winston-daily-rotate-file';

const tsFormat = () => new Date().toISOString();
const logDir = process.env.LOGGING_DIR || 'logs';
const logLevel = process.env.LOGGING_LEVEL || 'info';

// Create log directory if it does not exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

/**
 * Create new winston logger instance.
 */
const logger = new winston.Logger({
  transports: [
    new winston.transports.Console({
      timestamp: tsFormat,
      colorize: true,
      level: 'info'
    }),
    new winston.transports.DailyRotateFile({
      filename: `${logDir}/-debug.log`,
      timestamp: tsFormat,
      datePattern: 'yyyy-MM-dd',
      prepend: true,
      level: logLevel
    })
  ]
});

export default logger;
