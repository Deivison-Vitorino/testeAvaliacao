const { Router } = require('express');

const tarefaController = require('../controllers/tarefaController')


const route = Router();


/** Rota contém todas as tarefas */
route.get('/', tarefaController.paginaDeTarefas);

/** Rota de buscar tarefa por ID passado. */
route.get('/:id', tarefaController.buscaTarefaIdController);

/** Rota de cadastro de tarefas. */
route.post('/cadastro', tarefaController.cadastroTarefaController);

/** Rota de atualizar ifomações da tarefa com ID passado. */
route.patch('/:id', tarefaController.atualizaTarefaCntroller);

/** Rota de deletar um tarefa com ID passado */
route.delete('/:id', tarefaController.apagaTarefaController);

module.exports = route;
