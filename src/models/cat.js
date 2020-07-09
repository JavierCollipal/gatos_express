import { Schema, model } from 'mongoose';

const cats = new Schema({
	name: {
		type: String,
	},
	age: { type: Number },
	breed: { type: String },
	imageUrl: { type: String },
});

export default model('cats', cats);
