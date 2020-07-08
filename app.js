//requires
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/routes/index');
const appConfig = require('./src/config/express');
const swaggerDoc = require('./src/doc/swaggerDoc');
const { logger } = require("./src/config/logger/pino");
const { mongo_url } = require("./src/config/security/dotenv");
const app = express();
//express server configuration
appConfig(app, express);
swaggerDoc(app);
routes(app);
//mongo config
mongoose
  .connect(mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(logger.info('Data base online'))
  .catch(error => logger.error(error));

module.exports = app;
