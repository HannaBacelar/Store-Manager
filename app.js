const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const productController = require('./controllers/productController');
const salesController = require('./controllers/salesController');
const productMiddlewares = require('./middlewares/productMiddlewares');
//  const salesController = require('./controlles/salesController');

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use(bodyParser.json());

app.get('/products', productController.getAll);
app.get('/products/:id', productController.getById);
app.post('/products', productController.addProduct);
app.get('/sales', salesController.getAllSales);
app.get('/sales/:id', salesController.getByIdSales);
app.put('/products/:id', productController.updateProduct);
app.delete('/products/:id', productController.deleteProduct);

app.use(productMiddlewares);
//  app.get('/sales', salesController.getAllSales);
// app.get('/sales/:id', salesController.getByIdSales);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;