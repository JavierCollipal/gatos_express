import { Request, Response } from 'express'

export default class CatController {
  private catService: any
  constructor(catService: any) {
    this.catService = catService
  }
  async getAll(req: Request, res: Response): Promise<Response> {
    const cats = await this.catService.getAll()
    return res.status(200).json({ cats })
  }

  async create(req: Request, res: Response): Promise<Response> {
    const { body } = req

    const cat = await this.catService.createOne(body)

    return res.status(201).json({ cat })
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { body } = req
    const { id } = req.params

    const cat = await this.catService.updateOne(id, body)

    return res.status(201).json({ cat })
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    await this.catService.deleteOne(id)

    return res.sendStatus(200)
  }
}
