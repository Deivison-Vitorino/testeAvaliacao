const { check } = require('express-validator');

/** Checa informações passadas pelo usuário */
const autenticarInfos = [
    check('email')
        .notEmpty()
        .isEmail()
        .withMessage('E-mail não é válido'),
    check('usuario')
        .notEmpty()
        .isLength({ min: 2, max: 20 })
        .withMessage('Usuario ou senha não é válido'),
    check('senha')
        .notEmpty()
        .withMessage('Usuario ou senha não é válido'),
]

module.exports = autenticarInfos;
