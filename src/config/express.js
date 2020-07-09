import cookieParser from 'cookie-parser';
import cors from 'cors';
import helmet from 'helmet';
import rateLimiter from './security/rateLimiter';

export default function (app, express) {
	app.use(cors());
	app.use(helmet());
	app.use(rateLimiter);
	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));
	app.use(cookieParser());
}
