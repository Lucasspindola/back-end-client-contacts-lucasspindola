import "reflect-metadata";
import "dotenv/config";
import path from "path";
import { createTables1680137031800 } from './migrations/1680137031800-createTables';
import { createTables1680128575981 } from './migrations/1680128575981-createTables';
import { createTables1680127707734 } from './migrations/1680127707734-createTables';

import { createTables1680128520949 } from './migrations/1680128520949-createTables';
import { atualization1680127635873 } from './migrations/1680127635873-atualization';

import { DataSource, DataSourceOptions } from "typeorm";
import { User } from "./entities/user.entity";
import { Contact } from "./entities/contact.entity";
import { createTables1679676677504 } from "./migrations/1679676677504-createTables";
import { createTables1679677847261 } from "./migrations/1679677847261-createTables";
import { createTables1679682092015 } from "./migrations/1679682092015-createTables";
const setDataSourceConfig = (): DataSourceOptions => {
  const entitiesPath: string = path.join(__dirname, "./entities/**.{js,ts}");
  const migrationsPath: string = path.join(
    __dirname,
    "./migrations/**.{js,ts}"
  );

  const nodeEnv = process.env.NODE_ENV;

  if (nodeEnv === "production") {
    return {
      type: "postgres",
      url: process.env.DATABASE_URL,
      entities: [entitiesPath],
      migrations: [migrationsPath],
    };
  }

  if (nodeEnv === "test") {
    return {
      type: "sqlite",
      database: ":memory:",
      synchronize: true,
      entities: [entitiesPath],
    };
  }

  return {
    type: "postgres",
    host: process.env.PGHOST,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    port: parseInt(process.env.PGPORT),
    database: process.env.DB,
    synchronize: false,
    logging: true,
    entities: [User, Contact],
    migrations: [createTables1679676677504, createTables1679677847261, createTables1679682092015, atualization1680127635873,createTables1680127707734,createTables1680128520949,createTables1680128575981,createTables1680137031800],
  };
};

const dataSourceConfig = setDataSourceConfig();
export default new DataSource(dataSourceConfig);
