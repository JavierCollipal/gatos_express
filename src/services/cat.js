const data_cats = [
  { name: 'lanita', last_name: 'aguilar' },
  { name: 'pelusa', last_name: 'pedriño' },
  { name: 'esponjoso', last_name: 'jososo' },
  { name: 'autismotron', last_name: 'baneado' }
];
const getAll = () => {
  return data_cats;
};

const create = req => {
  data_cats.push(req);
  return data_cats;
};

const update = req => {};

module.exports = { getAll, create };

