//requires
const express = require('express');
const routes = require("./src/routes/index");
const appConfig = require("./src/config/express");
const app = express();

appConfig(app,express);

routes(app);

module.exports = app;
