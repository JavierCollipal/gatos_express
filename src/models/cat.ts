import mongoose, { Schema, model, Model } from 'mongoose'
import { Cat } from 'services/catModel.interface'

export const catSchema: Schema = new Schema({
  name: {
    type: String
  },
  age: { type: Number, default: 0 },
  breed: { type: String, default: 'sin raza' },
  imageUrl: { type: String, default: '' },
  state: { type: Number, default: 0 }
})

export type CatModel = Model<Cat>

const CatModel = model<Cat>('Cat', catSchema)
export default CatModel
