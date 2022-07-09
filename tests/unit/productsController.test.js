const sinon = require('sinon');
const { expect } = require('chai');

const productController = require('../../controllers/productController');
const productService = require('../../services/productService');
const connection = require('../../helpers/connection');
const { deleteProduct } = require('../../models/productModel');

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

describe('testes do arquivo Controller', () => {
  const response= {};
  const request = {};

  before(() => {
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub();
    // response.send = sinon.stub().returns();
  });

  after(() => {
    sinon.restore();
  });

  describe('testa função getAll', () => {
    before(() => {
      sinon.stub(productService, 'getAll').resolves(products);
    });
    it('verifica se a funçao retorna um sucesso com status 200', async () => {
      await productController.getAll(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
    });
    it('verifica  se o array de obj retornam id e name', async () => {
      await productController.getAll(request, response);
      expect(response.json).to.have.keys[('id', 'name')];
    });
    it('verifica se retorna um json com um array de objetos', async () => {
      await productController.getAll(request, response);
      products.forEach((produto) => expect(produto).to.be.an('object'));
    });
    describe('Testa função getById', () => {
      before(() => {
        request.params = { id: 1 }
      });
      it('verifica o status de sucesso 200', async () => {
        await productController.getById(request, response);
        expect(response.status.calledWith(200)).to.be.equal(true);
      });
      it('verifica  se o array de obj retornam id e name JSON', async () => {
      await productController.getById(request, response);
      expect(response.json).to.have.keys[('id', 'name')];
    });
    });
  });
});