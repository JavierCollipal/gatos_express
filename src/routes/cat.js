const express = require('express');
const catRouter = express.Router();
const { catController } = require("../controllers/index");

catRouter.get('/', catController.getAll);

module.exports = catRouter;