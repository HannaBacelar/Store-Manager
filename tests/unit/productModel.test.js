const sinon = require('sinon');
const { expect } = require('chai');

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

//https://www.chaijs.com/api/bdd/
const product = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
];

describe('Testa aqruivo models', () => {
    after(() => {
      sinon.restore();
    });
  
  describe('testa função GetAll', () => {
    sinon.stub(productModel, 'getAll').resolves(products);
    it('verifica se é possivel listar uma array de obj de produtos', async () => {
      const result = await productModel.getAll();
      expect(result).to.be.an('array');
      products.forEach((produto) =>
        expect(produto).to.be.an('object'));
    });
    it('verifica se o objeto lista um id e um nome do produto', async () => {
      const result = await productModel.getAll();
      expect(result).to.have.keys['id', 'name'];
    });
  });
  });
