import catService from '../services/cat';

const catController = {
	async getAll(req, res) {
		const cats = await catService.getAll();
		res.status(200).json({ cats });
	},

	async create(req, res) {
		const { body } = req;

		await catService.createOne(body);

		res.sendStatus(201);
	},

	async update(req, res) {
		const { body } = req;
		const { id } = req.params;

		await catService.updateOne(id, body);
		res.sendStatus(201);
	},

	async delete(req, res) {
		res.sendStatus(200);
	},
};

export default catController;
