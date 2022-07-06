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
    // req 3
const addProduct = async (name) => {
    const result = await productModel.addProduct(name);
    return result;
  };

// req 10 put 
const updateProduct = async (id, name) => {
  const verifyId = await getById(id);
  if (verifyId.error) return verifyId;
  const result = await productModel.updateProduct(id, name);
  return result;
};
// req 12
const deleteProduct = async (id) => {
    const idVerify = await getById(id);
  if (idVerify.error) return idVerify;
  const result = await productModel.deleteProduct(id);
  return result;
};
module.exports = {
  getAll,
  getById,
  addProduct,
  updateProduct,
  deleteProduct,
};