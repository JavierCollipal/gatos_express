import './config/security/dotenv';
import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/index';
import appConfig from './config/express';
import swaggerDoc from './doc/swaggerDoc';
import { logger } from './config/logger/pino';
import { mongo_url } from './config/security/dotenv';
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
	.catch((error) => logger.error(error));

module.exports = app;
