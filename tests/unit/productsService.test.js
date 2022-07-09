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
  });