import express from 'express';
const catRouter = express.Router();
import catController from '../controllers/cat';

catRouter.get('/cats', catController.getAll);
catRouter.post('/cats', catController.create);
catRouter.put('/cats/:id', catController.update);
catRouter.delete('/cats/:id', catController.delete);

export default catRouter;
