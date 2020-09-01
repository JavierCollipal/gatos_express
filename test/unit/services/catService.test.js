import CatService from '../../../src/services/cat';

const newCat = { name: 'esponjoso', age: 20 };
const cats = [
	{ name: 'lanita', age: 5 },
	{ name: 'micha', age: 10 },
];
const mockCatModel = {
	find: jest.fn().mockReturnValue(cats),
	createOne: jest.fn().mockReturnValue(newCat),
	updateOne: jest.fn(),
	deleteOne: jest.fn(),
	findById: jest.fn(),
};
const catService = new CatService(mockCatModel);
describe('catService', () => {
	test('getAll deberia obtener todos los gatos', async () => {
		const foundCats = await catService.getAll();
		expect(mockCatModel.find).toBeCalled();
		expect(foundCats).toEqual(cats);
	});
	test('createOne deberia crear un gato y devolverlo', async () => {
		const createdCat = await catService.createOne(newCat);
		expect(mockCatModel.createOne).toBeCalled();
		expect(createdCat).toEqual(newCat);
	});
	test('updateOne deberia actualizar un gato', async () => {
		const updateData = { age: 99, name: 'lanita actualizada' };
		await catService.updateOne('id de lani', updateData);
	});
	test('deleteOne deberia borrar un gato', async () => {
		await catService.deleteOne('id de gato');
		expect(mockCatModel.deleteOne).toBeCalled();
	});
});
