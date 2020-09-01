export default class CatController {
	constructor(catService) {
		this.catService = catService;
	}
	async getAll(req, res) {
		const cats = await this.catService.getAll();
		res.status(200).json({ cats });
	}

	async create(req, res) {
		const { body } = req;

		const cat = await this.catService.createOne(body);

		res.status(201).json({ cat });
	}

	async update(req, res) {
		const { body } = req;
		const { id } = req.params;

		const cat = await this.catService.updateOne(id, body);

		res.status(201).json({ cat });
	}

	async delete(req, res) {
		const { id } = req.params;

		await this.catService.deleteOne(id);

		res.sendStatus(200);
	}
}
