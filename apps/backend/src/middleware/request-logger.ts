import { format } from 'date-fns';
import { Request, Response, NextFunction } from 'express';

import { logger } from '../utils/logger.js';

export const requestLogger = (req: Request, res: Response, next: NextFunction): void => {
  const date = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
  logger.info(`Incoming request: ${req.originalUrl}, ${req.method}, ${date}`);
  next();
};

export const responseLogger = (req: Request, res: Response, next: NextFunction): void => {
  const start = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - start;
    const date = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
 
      logger.info(
      `Server response: ${req.originalUrl}, ${req.method}, ${date}, Status: ${res.statusCode}, Duration: ${duration}ms`
    );
  });
   
    res.on('close', () => {
  if (!res.writableEnded) {
    logger.warn(`Request aborted: ${req.originalUrl}, ${req.method}, status: ${res.statusCode}`);
  }
});

  next();
};
