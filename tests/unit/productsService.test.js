const sinon = require('sinon');
const { expect } = require('chai');

const productService = require('../../services/productService');
const productModel = require('../../models/productModel');

const connection = require('../../helpers/connection');

const products = [{
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
];

const product = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
];

describe('testa aqruivo Services', () => {
  after(() => {
    sinon.restore();
  });

  describe('testa função getAll', () => {
    it('verifica se é possível retornar um array de objetos se houver produtos', async () => {
      sinon.stub(productModel, 'getAll').resolves(products);

      const result = await productService.getAll();

      expect(result).to.be.an('array');

      products.forEach((product) => expect(product).to.be.an('object'));
    });
  });
   describe('testa função getById', () => {
    it('verifica se é possível retornar um array de objetos com nome e id', async () => {
      sinon.stub(productModel, 'getById').resolves(products);

      const result = await productService.getById();

      expect(result).to.have.keys['id','name'];

      products.forEach((product) => expect(product).to.be.an('object'));
    });
     
   });
    describe('testando função addProduct', () => {
    it('verifica se retorna id quando todas dados estiverem corretos', async () => {
      sinon.stub(productModel, 'addProduct').resolves(1);

      const result = await productService.addProduct({ name: 'AgumProduto' });

      expect(result).to.have.equal(1);
    });
  });
  });