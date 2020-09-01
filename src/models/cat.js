import mongoose from 'mongoose';

const cats = new mongoose.Schema({
	name: {
		type: String,
	},
	age: { type: Number },
	breed: { type: String },
	imageUrl: { type: String },
});

class Cat extends mongoose.Model {}
const CatModel = mongoose.model(Cat, cats, 'cats');
export default CatModel;
