const express = require('express');
const routes = express.Router();


/******************************************** CONTROLADORES ***********************/
const clientsController = require('./controllers/clientsController');
const sellsController = require('./controllers/sellsController');


/******************************************** ROTAS ***********************/
//rotas clientes
routes.get('/clients', clientsController.index)
routes.post('/clients', clientsController.create)

//rotas vendas

routes.get('/sells', sellsController.index)
routes.post('/sells', sellsController.create)
routes.delete('/sells/:id', sellsController.delete)


//export da rota
module.exports = routes