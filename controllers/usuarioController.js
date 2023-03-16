const usuarioController = {
    login: (req, res) => {
        
        res.json('Usuário logado');
    },
    usuarios: (req, res) => {
        res.json('Rota de usuários');
    },
    cadastroDeUsuario: (req, res) => {
        res.json('Rota de cadastro de usuários');
    },
    buscaUsuarioPorId: (req, res) => {
        res.json('Busca usuário por ID');
    },
    atulizaUsuarioPorId: (req, res) => {
        res.json('Atualiza informaçõs do usuário');
    },
    apagaUsuarioPorId: (req, res) => {
        res.json('Apaga usuário por ID');
    }
};

module.exports = usuarioController;