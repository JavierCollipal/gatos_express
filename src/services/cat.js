export default class CatService {
	constructor(catModel) {
		this.catModel = catModel;
	}
	async getAll() {
		return this.catModel.find();
	}
	async createOne(cat) {
		const newCat = new this.catModel(cat);
		return await newCat.save();
	}
	async updateOne(id, data) {
		const foundCat = await this.catModel.findById(id);
		const updatedCat = Object.assign(foundCat, data);
		return await updatedCat.save();
	}
	async deleteOne(id) {
		await this.catModel.deleteOne({ _id: id });
	}
}
