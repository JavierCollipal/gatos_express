import catService from '../services/cat';

const catController = {
	async getAll(req, res) {
		const cats = await catService.getAll();
		res.status(200).json({ cats });
	},

	async create(req, res) {
		const { body } = req;

		const cat = await catService.createOne(body);

		res.status(201).json({ cat });
	},

	async update(req, res) {
		const { body } = req;
		const { id } = req.params;

		const cat = await catService.updateOne(id, body);

		res.status(201).json({ cat });
	},

	async delete(req, res) {
		const { id } = req.params;

		await catService.deleteOne(id);

		res.sendStatus(200);
	},
};

export default catController;
