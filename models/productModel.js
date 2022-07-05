const connection = require('../helpers/connection');

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

module.exports = {
  getAll,
  getById,
};