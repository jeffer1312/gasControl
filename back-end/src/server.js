const express = require('express');
const routes = require('./routes');
const cors = require('cors')
const port = 3333


const app = express();
app.use(cors())

//usar json na requisição
app.use(express.json())

//usar o arquivo de rotas 
app.use(routes)


// colocar servidor para escutar a porta
app.listen(port)