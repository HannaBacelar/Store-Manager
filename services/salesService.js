const salesModel = require('../models/salesModel');

// req 8

const getAllSales = async () => {
    const result = await salesModel.getAllSales();
    return result;
};

const getByIdSales = async (id) => {
  const result = await salesModel.getByIdSales(id);
  if (!result) return null;
  return result;
};
module.exports = {
  getAllSales,
  getByIdSales,
};
