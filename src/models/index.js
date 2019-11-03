const Sequelize = require("sequelize");
const userAssignedTests = require("./user_assigned_tests");
const defaultTestAssignments = require("./default_test_assigments");
const {
  database,
  database_host,
  database_password,
  database_port,
  database_username,
  database_schema,
} = require("../config");
//for production
const sequelize = new Sequelize(database, database_username, database_password, {
  host: database_host,
  dialect: "postgres",
  port: database_port,
  schema: database_schema,
});
const UserAssignedTests = userAssignedTests(sequelize, Sequelize);
const DefaultTestAssignments = defaultTestAssignments(sequelize, Sequelize);
module.exports = {
  UserAssignedTests,
  DefaultTestAssignments
};
