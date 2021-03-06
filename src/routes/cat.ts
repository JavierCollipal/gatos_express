import express, { Request, Response } from 'express'
import CatService from '../services/cat'
import CatController from '../controllers/cat'
import CatModel from '../models/cat'
const catRouter = express.Router()
const catService = new CatService(CatModel)
const catController = new CatController(catService)

catRouter.get('/cats', (req: Request, res: Response) => catController.getAll(req, res))
catRouter.post('/cats', (req: Request, res: Response) => catController.create(req, res))
catRouter.put('/cats/:id', (req: Request, res: Response) => catController.update(req, res))
catRouter.delete('/cats/:id', (req: Request, res: Response) => catController.delete(req, res))

export default catRouter
