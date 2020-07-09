import Cat from '../models/cat';

const catService = {
	async getAll() {
		return await Cat.find();
	},
	async createOne(cat) {
		const newCat = new Cat(cat);
		return await newCat.save();
	},
	async updateOne(id, data) {
		const foundCat = await Cat.findById(id);
		console.log(foundCat);
		const updatedCat = Object.assign(foundCat, data);
		return await updatedCat.save();
	},
	async deleteOne(id) {
		await Cat.deleteOne({ _id: id });
	},
};

export default catService;
