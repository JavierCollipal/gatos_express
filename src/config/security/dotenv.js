import dotenv from 'dotenv';
dotenv.config();

export const mongo_url = process.env.MONGO_URL;
export const server_port = process.env.SERVER_PORT;
export const log_level = process.env.LOG_LEVEL;
