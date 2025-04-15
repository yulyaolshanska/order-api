import winston from 'winston';

const logFormat = winston.format.combine(
  winston.format.printf(({ level, message }) => {
    return `${level}: ${message}`;
  })
);

export const logger = winston.createLogger({
  level: 'info',
  format: logFormat,
  transports: [new winston.transports.Console()],
});