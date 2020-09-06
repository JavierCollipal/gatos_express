export default class CatService {
	private readonly catModel: any;
	constructor(catModel: any) {
		this.catModel = catModel;
	}
	async getAll() {
		return this.catModel.find();
	}
	async createOne(cat: any) {
		const newCat = new this.catModel(cat);
		return await newCat.save();
	}
	async updateOne(id: any, data: any) {
		const foundCat = await this.catModel.findById(id);
		const updatedCat = Object.assign(foundCat, data);
		return await updatedCat.save();
	}
	async deleteOne(id: any) {
		await this.catModel.deleteOne({ _id: id });
	}
}
