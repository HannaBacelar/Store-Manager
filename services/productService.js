const productModel = require('../models/productModel');
// req 1
const getAll = async () => {
    const result = await productModel.getAll();
    return result;
};

const getById = async (id) => {
    const result = await productModel.getById(id);
  if (!result) {
 return {
    error: {
      code: 'NOT_FOUND', message: 'Product not found' },
    }; 
  }
    
    return result;
};
    // req 2
const addProduct = async (name) => {
  if (name) {
    const result = await productModel.addProduct(name);
    return result;
  }
};

module.exports = {
  getAll,
  getById,
  addProduct,
};