import Cat from '../models/cat';

const catService = {
	async getAll() {
		return await Cat.find();
	},
	async createOne(cat) {},
	async updateOne(id, data) {},
	async deleteOne(id) {},
};

export default catService;
