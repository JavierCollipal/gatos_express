import app from '../../src/app';
import request from 'supertest';

const apiPrefix = '/api/v1';
const defaultUrl = '/cats';
const defaultCompleteUrl = () => `${apiPrefix}/${defaultUrl}`;
const validCreate = {
	name: 'lanita prueba',
	breed: 'angora de prueba',
	age: 10,
};
const validUpdate = {
	name: 'lanita prueba actualizada',
	breed: 'angora de prueba actualizado',
	age: 20,
};
//we use the cat form post in put and delete call
let savedCat;

describe('GET /cats', () => {
	it('should return code 200 and a array with/without data', (done) => {
		request(app)
			.get(defaultCompleteUrl())
			.then((response) => {
				const { cats } = response.body;
				expect(response.statusCode).toBe(200);
				expect(cats.length).toBeGreaterThanOrEqual(0);
				done();
			});
	});
});
describe('POST /cats', () => {
	it('should return code 201 and the saved cat', (done) => {
		request(app)
			.post(defaultCompleteUrl())
			.send(validCreate)
			.then((response) => {
				const { cat } = response.body;
				savedCat = cat;
				expect(response.statusCode).toBe(201);
				expect(cat).toBeDefined();
				done();
			});
	});
});
describe('PUT /cats/:id', () => {
	it('should return code 201 and the updated cat', (done) => {
		request(app)
			.put(`${defaultCompleteUrl()}/${savedCat._id}`)
			.send(validUpdate)
			.then((response) => {
				const { cat } = response.body;
				expect(response.statusCode).toBe(201);
				expect(cat).toBeDefined();
				expect(cat.name).toBe(validUpdate.name);
				expect(cat.breed).toBe(validUpdate.breed);
				done();
			});
	});
});
describe('DELETE /cats', () => {
	it('should return code 200 after deleting the cat', (done) => {
		request(app)
			.delete(`${defaultCompleteUrl()}/${savedCat._id}`)
			.then((response) => {
				expect(response.statusCode).toBe(200);
				done();
			});
	});
});
