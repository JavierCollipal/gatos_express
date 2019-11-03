const { catService } = require('../services/index');

const catController = {
  getAll(req, res) {
    res.send(catService.getAll());
  },

  create(req, res) {

  },

  update(req, res) {

  },
};

module.exports = catController;
