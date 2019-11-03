const { catService } = require("../services/index");
const getAll = (req, res) => {
    res.send(catService.getAll());
};

const create = (req, res) => {

};

const update = (req, res) => {

};

module.exports = { getAll,create};
