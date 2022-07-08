const sinon = require('sinon');
const { expect } = require('chai');

const productController = require('../../controllers/productController');
const productService = require('../../services/productService');
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

describe('testes do arquivo Controller', () => {
  const response= {};
  const request = {};

  before(() => {
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub();
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
  })
});