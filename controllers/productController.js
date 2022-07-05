const rescue = require('express-rescue');
const productService = require('../services/productService');
const statusHttp = require('../helpers/statusHttp');

const getAll = async (req, res) => {
      const results = await productService.getAll();
      res.status(statusHttp.OK).json(results);
};

const getById = rescue(async (req, res) => {
      const { id } = req.params;
      const result = await productService.getById(id);
      if (result.error) {
       return res.status(404).json({ message: result.error.message });
     }
     return res.status(statusHttp.OK).json(result);
});
module.exports = {
  getAll,
  getById,
};