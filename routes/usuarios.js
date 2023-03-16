const { Router } = require('express');

const autenticarInfos = require('../middllawares/auteticacaoMiddllaware');
const usuarioController = require('../controllers/usuarioController');
const validador = require('../middllawares/validatorMiddllaare');
const InfoCadastroUsuario = require('../validators/cadastroDeUsuarios')

const route = Router();

/** Rota contém todos os usuários cadastrados. */
route.get(
    '/', usuarioController.usuarios
);

/** Rota de cadastro de usuários. */
route.post(
    '/cadastro', InfoCadastroUsuario, validador, usuarioController.cadastroDeUsuario
);

/** Rota para usuáro fazer login */
route.post(
    '/login', autenticarInfos, validador, usuarioController.login
);

/** Rota busca usuário com ID epecífico. */
route.get(
    '/:id', usuarioController.buscaUsuarioPorId
);

/** Rota de atualizar ifomações do usuário com ID passado. */
route.patch(
    '/:id', usuarioController.atulizaUsuarioPorId
);

/** Rota de deletar um usuário com ID passado */
route.delete(
    '/:id', usuarioController.apagaUsuarioPorId
);

module.exports = route;
