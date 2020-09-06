import mongoose, { Schema, model } from 'mongoose'
import { Cat } from 'services/catModel.interface'

export const catSchema = new Schema({
  name: {
    type: String
  },
  age: { type: Number, default: 0 },
  breed: { type: String, default: 'sin raza' },
  imageUrl: { type: String, default: '' }
})

export default model<Cat>('Cat', catSchema)
