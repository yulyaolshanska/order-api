import "reflect-metadata";
import express from "express";
import rateLimit from "express-rate-limit";
import cors from "cors";

import { AppDataSource } from "./db/data-source";
import { validateEnv } from "./utils/validate-env";
import orderRouter from "./routes/orders";
import { requestLogger, responseLogger } from "./middleware/middleware";
import { logger } from "./utils/logger";
import { ApiResponseMessage } from "./constants/apiResponseMessage";

validateEnv();

const app = express();
app.use(express.json());
app.use(cors());

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
  message: ApiResponseMessage.RATE_LIMIT,
});

app.use(limiter);

app.use("/api/orders", orderRouter);
app.use(requestLogger);
app.use(responseLogger);

AppDataSource.initialize()
  .then(() => {
    app.listen(3000, () => {
      logger.info("🚀 Server running on http://localhost:3000");
    });
  })
  .catch((error) =>
    logger.error(`❌ Failed to initialize data source: ${error.message}`),
  );
