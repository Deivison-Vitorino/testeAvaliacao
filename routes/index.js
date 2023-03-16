const { Router } = require('express');

const rotaUsuario = require('./usuarios');

const rotaTarefas = require('./tarefas');

const route = Router();


route.use('/usuarios', rotaUsuario);
route.use('/tarefas', rotaTarefas);

module.exports = route;