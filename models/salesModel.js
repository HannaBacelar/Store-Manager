// const connection = require('../helpers/connection');
// // req 8
// const getAllSales = async () => {
//   const [rows] = await connection.execute(
//     'SELECT * FROM sales',
//   );
//   return rows;
// };

// const getByIdSales = async (id) => {
//   const [rows] = await connection.execute(
//     'SELECT * FROM saleId ASC OR  productId DESC WHERE id=?',
//     [id],
//   );
//   return rows[0];
// };

// module.exports = {
//   getAllSales,
//   getByIdSales,
// };