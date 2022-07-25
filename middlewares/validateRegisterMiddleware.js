const path = require('path');
const { body } = require('express-validator');

module.exports = [
    body('firstName').notEmpty().withMessage('Escribe tu nombre').isLength({min: 2, max: 99}).withMessage('Debe contener un minimo de 2 caracteres.'),
    body('lastName').notEmpty().withMessage('Escribe tu apellido').isLength({min: 2, max: 99}).withMessage('Debe contener un minimo de 2 caracteres.'),
    body('password').notEmpty().withMessage('Escribe tu contraseña').isLength({min: 8, max: 99}).withMessage('Debe contener un minimo de 8 caracteres.'),
    body('email').notEmpty().withMessage('Escribe tu correo'),
    /*body('avatar').custom((value, {req}) =>{
        let file = req.file;
        if (!file) {
            throw new Error('Tienes que subir una imagen');
        }return true
    })*/
]