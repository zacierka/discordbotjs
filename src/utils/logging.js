const winston = require('winston');
const config = require('../../config.json');
const { combine, timestamp, printf, colorize, align, json } = winston.format;

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: combine(timestamp(), json()),
  transports: [
    new winston.transports.File({
      filename: 'bot.log'
    }),
    new winston.transports.File({
      filename: 'bot-error.log',
      level: 'error',
    }),
  ],
});

module.exports = logger;