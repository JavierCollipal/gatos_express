const cookieParser = require('cookie-parser');
const cors = require('cors');

module.exports = (app, express) => {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
};