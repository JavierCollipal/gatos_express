const { catService } = require('../services/index');
const { dataResponse } = require('../common/response');
const catController = {
  getAll(req, res) {
    res.send(dataResponse(catService.getAll()));
  },

  create(req, res) {
    const data = req.body;
    const dataPush = catService.create(data);
    res.send(dataPush);
  },

  update(req, res) {

  },
};

module.exports = catController;
