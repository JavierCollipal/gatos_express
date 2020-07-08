const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  mongo_url: process.env.MONGO_URL,
  server_port: process.env.SERVER_PORT,
  log_level: process.env.LOG_LEVEL,
};
