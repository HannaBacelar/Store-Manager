const connection = require('../helpers/connection');
// req 1

const getAll = async () => {
  const [rows] = await connection.execute(
    'SELECT * FROM products',
  );

  return rows;
};

const getById = async (id) => {
  const [rows] = await connection.execute(
    'SELECT * FROM products WHERE id=?',
    [id],
  );
  return rows[0];
};
// req 2

const addProduct = async (name) => {
  const [row] = await connection.execute(
    'INSERT INTO products (name) VALUES (?)',
    [name],
  );
  const result = {
    id: row.insertId,
    name,
  };
  return result;
};

module.exports = {
  getAll,
  getById,
  addProduct,
};