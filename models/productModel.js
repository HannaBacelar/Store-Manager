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
// req 3

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
// req 10 
const updateProduct = async (id, name) => {
 await connection.execute(
   `UPDATE products
      SET name= ?
      WHERE id = ?`,
    [name, id],
  );
  return getById(id);
};

module.exports = {
  getAll,
  getById,
  addProduct,
  updateProduct,
};