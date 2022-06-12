const path = require('path');
const { body } = require('express-validator');

module.exports = [
    body('firstName').notEmpty().withMessage('Escribe tu nombre'),
    body('lastName').notEmpty().withMessage('Escribe tu apellido'),
    body('password').notEmpty().withMessage('Selecciona un password'),
    body('email').notEmpty().withMessage('Escribe tu correo'),
    /*body('avatar').custom((value, {req}) =>{
        let file = req.file;
        if (!file) {
            throw new Error('Tienes que subir una imagen');
        }return true
    })*/
]