const connection = require('../helpers/connection');

// req 8

const getAllSales = async () => {
  const [rows] = await connection.execute(
    `SELECT p.sale_id AS saleId, s.date, p.product_id AS productId, p.quantity 
    FROM sales_products AS p
    INNER JOIN sales AS s
    ON p.sale_id = s.id
    ORDER BY p.sale_id ASC, p.product_id ASC;`,
  );

  return rows;
};

const getByIdSales = async (id) => {
  const query = `SELECT s.date, p.product_id AS productId, p.quantity 
    FROM StoreManager.sales_products AS p
    INNER JOIN StoreManager.sales AS s
    ON p.sale_id = s.id
    WHERE p.sale_id=?
    ORDER BY p.sale_id ASC, p.product_id ASC;`;
  const [result] = await connection.execute(query, [id]);
  if (result.length === '') return undefined;
  return result;
};
module.exports = {
  getAllSales,
  getByIdSales,
};