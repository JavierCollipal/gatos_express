import mongoose, { Schema, model } from 'mongoose';

export const catSchema = new Schema(
  {
    name: {
      type: String,
    },
    age: { type: Number },
    breed: { type: String },
    imageUrl: { type: String },
  }
  );

export default model('Cat', catSchema);
