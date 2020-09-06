import express from 'express';
import Cat from '../models/cat';
import CatService from "../services/cat";
import CatController from "../controllers/cat";
const catRouter = express.Router();

const catService = new CatService(Cat);
const catController = new CatController(catService);

catRouter.get('/cats', (req, res) => catController.getAll(req, res));

catRouter.post('/cats', (req, res) => catController.create(req, res));
catRouter.put('/cats/:id', (req, res) => catController.update(req, res));
catRouter.delete('/cats/:id', (req, res) => catController.delete(req, res));

export default catRouter;
