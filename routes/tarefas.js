const { Router } = require('express');
const route = Router();


/** Rota contém todas as tarefas */
route.get('/', (req, res) => {
    res.json('Todas as tarefas');
});

/** Rota de buscar tarefa por ID passado. */
route.get('/:id', (req, res) => {
    res.json('Tarefa com id epecífico');
});

/** Rota de cadastro de tarefas. */
route.post('/cadastro', (req, res) => {
    res.json('Tarefa cadastrada');
});

/** Rota de atualizar ifomações da tarefa com ID passado. */
route.patch('/:id', (req, res) => {
    res.json('Tarefa atualizada');
});

/** Rota de deletar um tarefa com ID passado */
route.delete('/:id', (req, res) => {
    res.json('Tarefa excluida');
});

module.exports = route;
