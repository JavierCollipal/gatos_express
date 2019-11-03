const express = require('express');
const catRouter = express.Router();
const { getAll }  = require("../controllers/cat");
console.log(typeof getAll);
catRouter.get('/', getAll);
module.exports = catRouter;