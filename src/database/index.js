const { sequelizeInstance, sequelizeLibrary } = require('./sequelize');
const { cat } = require('../models/index');

const catModel = cat(sequelizeInstance, sequelizeLibrary);

module.exports = { catModel };


