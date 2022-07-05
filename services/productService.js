const productModel = require('../models/productModel');

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

module.exports = {
  getAll,
  getById,
};