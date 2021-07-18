import Dotenv from "dotenv";

Dotenv.config();

export default Object.freeze({
  DatabaseName: process.env.DATABASE_NAME,

  DatabaseUsername: process.env.DATABASE_USERNAME,
  DatabasePassword: process.env.DATABASE_PASSWORD,

  DatabaseHost: process.env.DATABASE_HOST,
  DatabasePort: process.env.DATABASE_PORT * 1,

  DatabaseDialect: process.env.DATABASE_DIALECT,
});
