const { catService } = require('../services/index');
const { dataResponse } = require('../common/response');
const catController = {
  getAll(req, res) {
    res.send(dataResponse(catService.getAll()));
  },

  create(req, res) {

  },

  update(req, res) {

  },
};

module.exports = catController;
