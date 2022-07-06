const Joi = require('joi');
const rescue = require('express-rescue');
const productService = require('../services/productService');
const statusHttp = require('../helpers/statusHttp');
// req 1
const getAll = async (req, res) => {
      const results = await productService.getAll();
      res.status(statusHttp.OK).json(results);
};

const getById = (async (req, res) => {
      const { id } = req.params;
      const result = await productService.getById(id);
      if (result.error) {
       return res.status(404).json({ message: result.error.message });
     }
     return res.status(statusHttp.OK).json(result);
});
// req 3
const addProduct = rescue(async (req, res, next) => {
 const { error } = Joi.object({
 name: Joi.string().required().min(5).not(),
 }).validate(req.body);

  if (error) return next(error); 
  const { name } = req.body;
  const result = await productService.addProduct(name);
  if (!result) return next(error);
   return res.status(statusHttp.CREATED).json(result);
});

// req 10
const updateProduct = (async (req, res, next) => {
  const { error } = Joi.object({
 name: Joi.string().required().min(5).not(),
  }).validate(req.body);
  if (error) return next(error);

  const { id } = req.params;
  const { name } = req.body;
      const result = await productService.updateProduct(id, name);
      if (result.error) {
        return next(result.error); 
     }
     return res.status(statusHttp.OK).json(result);
});
// req 12
const deleteProduct = async (req, res, next) => {
  const { id } = req.params;
   const result = await productService.deleteProduct(id);
      if (result.error) return next(result.error); 
     
     return res.status(204).send();
};

module.exports = {
  getAll,
  getById,
  addProduct, 
  updateProduct,
  deleteProduct,
};