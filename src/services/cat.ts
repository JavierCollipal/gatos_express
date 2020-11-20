import { Cat } from 'services/catModel.interface'
import { CatModel } from '../models/cat'

export default class CatService {
  private readonly catModel: CatModel
  constructor(catModel: CatModel) {
    this.catModel = catModel
  }

  async getAll(): Promise<Cat[]> {
    return this.catModel.find()
  }

  async createOne(cat: Cat): Promise<Cat> {
    const newCat = new this.catModel(cat)
    return await newCat.save()
  }

  async updateOne(id: string, data: Cat): Promise<Cat> {
    const foundCat = await this.catModel.findById(id)
    const updatedCat = Object.assign(foundCat, data)
    return await updatedCat.save()
  }

  async deleteOne(id: string): Promise<any> {
    return this.catModel.deleteOne({ _id: id })
  }
}
