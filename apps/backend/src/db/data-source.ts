import { DataSource } from "typeorm";

import { User, Product, Order } from "../entities/entities";
import { DbConfig } from "./db-config";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DbConfig.DB_HOST,
  port: DbConfig.DB_PORT,
  username: DbConfig.DB_USER,
  password: DbConfig.DB_PASS,
  database: DbConfig.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [User, Product, Order],
});
