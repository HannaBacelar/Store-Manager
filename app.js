const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const productController = require('./controllers/productController');

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});
app.use(bodyParser.json());

app.get('/products', productController.getAll);
app.get('/products/:id', productController.getById);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;