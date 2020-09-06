import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';
import appConfig from './config/express';
import { logger } from './config/logger/pino';
import { mongo_url } from './config/security/dotenv';
const app = express();
//express server configuration
appConfig(app, express);
routes(app);
//mongo config
mongoose
	.connect(mongo_url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	})
	.then(() => console.info('Data base online'))
	.catch((error) => logger.error(error));

export default app;
