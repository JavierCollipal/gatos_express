import catRouter from './cat';
const apiVersion = '/api/v1';

export default function (app) {
	app.use(apiVersion, catRouter);
}
