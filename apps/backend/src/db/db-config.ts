import dotenv from "dotenv";

dotenv.config();

export const DbConfig = {
  DB_HOST: process.env["DB_HOST"] as string,
  DB_PORT: parseInt(process.env["DB_PORT"] as string, 10),
  DB_USER: process.env["DB_USER"] as string,
  DB_PASS: process.env["DB_PASS"] as string,
  DB_NAME: process.env["DB_NAME"] as string,
};
