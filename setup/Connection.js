import Sequelize from "sequelize";
import config from "../config";

export default new Sequelize(
  config.DatabaseName,
  config.DatabaseUsername,
  config.DatabasePassword,
  {
    host: config.DatabaseHost,
    dialect: config.DatabaseDialect,
    port: config.DatabasePort,

    logging: true,
  }
);
