import 'reflect-metadata';
import express from 'express';
import rateLimit from 'express-rate-limit';

import { AppDataSource } from './db/data-source';
import { validateEnv } from './utils/validate-env';
import orderRouter from './routes/orders';
import { requestLogger, responseLogger } from './middleware/middleware';
import { logger } from './utils/logger.js';

validateEnv();

const app = express();
app.use(express.json());

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
  message: 'Too many requests from this user',
});

app.use(limiter);

app.use('/orders', orderRouter);
app.use(requestLogger);
app.use(responseLogger);

AppDataSource.initialize()
  .then(() => {
    app.listen(3000, () => {
      logger.info('🚀 Server running on http://localhost:3000');
    });
  })
  .catch((error) =>  logger.error(`❌ Failed to initialize data source: ${error.message}`));
