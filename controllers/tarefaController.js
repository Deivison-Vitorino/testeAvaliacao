const tarefaController = {
    paginaDeTarefas: (req, res) => {
        res.json('Todas as tarefas');
    },
    buscaTarefaIdController: (req, res) => {
        res.json('Busca tarefa por ID')
    },
    cadastroTarefaController: (req, res) => {
        res.json('Cadastro de tarefa')
    },
    atualizaTarefaCntroller: (req, res) => {
        res.json('Atualiza tarefa')
    },
    apagaTarefaController: (req, res) => {
        res.json('Apaga tarefa')
    },

};

module.exports = tarefaController;