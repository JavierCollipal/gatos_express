const sequelizeLibrary = require("sequelize");
const {
  database,
  database_host,
  database_password,
  database_port,
  database_username,
  database_schema,
} = require("../config/dotenv");

//for production
const sequelizeInstance = new sequelizeLibrary(database, database_username, database_password, {
  host: database_host,
  dialect: "postgres",
  port: database_port,
  schema: database_schema,
});

module.exports = {
  sequelizeInstance,
  sequelizeLibrary,
};
