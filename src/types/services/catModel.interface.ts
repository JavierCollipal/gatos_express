import mongoose from 'mongoose'

export interface Cat extends mongoose.Document {
  name: string
  age: number
  breed: string
  imageUrl: string
}
export interface CatModel {
  find(): Promise<Cat[]>
  deleteOne(options: any): number
  findById(id): Cat
}
