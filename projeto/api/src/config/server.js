const port = 3200;

const express = require('express');
const bodyParser = require('body-parser');

const server = express();

server.use(bodyParser.urlencoded({extended: True}));
server.use(bodyParser.json());

server.use('/', {_, resposta, _2} => {
    resposta.write('Meu servidor da API da plataforma de cursos');
    resposta.end();
});

server.listen(port, _ => console.log(`Servidor no ar na porta ${port}`));

module.exports = server;