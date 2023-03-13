const { Router } = require('express');
const route = Router();

/** Rota de buscar usuário por ID passado. */
route.get('/', (req, res) => {
    res.json('Rota de usuários');
});

/** Rota contém todos os usuários cadastrados. */
route.get('/', (req, res) => {
    res.json('Usuário com id epecífico');
});

/** Rota busca usuário com ID epecífico. */
route.get('/:id', (req, res) => {
    res.json('Usuário com id epecífico');
});

/** Rota de cadastro de usuários. */
route.post('/cadastro', (req, res) => {
    res.json('Usuário cadastrado');
});

/** Rota de atualizar ifomações do usuário com ID passado. */
route.patch('/:id', (req, res) => {
    res.json('Usuário atualizado');
});

/** Rota de deletar um usuário com ID passado */
route.delete('/:id', (req, res) => {
    res.json('Usuário deletado');
});

module.exports = route;
