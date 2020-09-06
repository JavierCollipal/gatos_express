export default class CatController {
	private catService: any;
	constructor(catService: any) {
		this.catService = catService;
	}
	async getAll(req: any, res: any) {
		const cats = await this.catService.getAll();
		res.status(200).json({ cats });
	}

	async create(req: any, res: any) {
		const { body } = req;

		const cat = await this.catService.createOne(body);

		res.status(201).json({ cat });
	}

	async update(req: any, res: any) {
		const { body } = req;
		const { id } = req.params;

		const cat = await this.catService.updateOne(id, body);

		res.status(201).json({ cat });
	}

	async delete(req: any, res: any) {
		const { id } = req.params;

		await this.catService.deleteOne(id);

		res.sendStatus(200);
	}
}
