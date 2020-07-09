import pino from 'pino';
import { log_level } from '../security/dotenv';

export const logger = pino({
	level: log_level,
});
