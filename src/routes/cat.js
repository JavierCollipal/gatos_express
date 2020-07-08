const express = require('express');
const catRouter = express.Router();
const catController = require("../controllers/cat.js");

catRouter.get('/', catController.getAll);
catRouter.post('/', catController.create);

module.exports = catRouter;
