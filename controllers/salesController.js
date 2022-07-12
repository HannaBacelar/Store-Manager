const salesService = require('../services/salesService');
const statusHttp = require('../helpers/statusHttp');

const getAllSales = async (req, res) => {
      const results = await salesService.getAllSales();
      res.status(statusHttp.OK).json(results);
};

const getByIdSales = async (req, res) => {
  const { id } = req.params;
  const results = await salesService.getByIdSales(id);
  if (results.length === undefined || results.length === 0) {
    return res.status(404).json({ message: 'Sale not found' });
  }
  return res.status(statusHttp.OK).json(results);
};
module.exports = {
  getAllSales,
  getByIdSales,
};