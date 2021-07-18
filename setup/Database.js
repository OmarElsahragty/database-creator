import Sequelize from "sequelize";
import * as models from "../models";
import connection from "./Connection";
import relationships from "./Relationships";

const Database = { connection };

Object.keys(models).map((model) => {
  Database[model] = models[model](connection, Sequelize.DataTypes);
});

relationships(Database); // * RELATIONSHIPS FOR SEQUELIZE ORM RUNTIME

export default Database;
