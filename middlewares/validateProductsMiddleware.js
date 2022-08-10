const { body } = require('express-validator'); 

const validateProducts = [
    body('name')
        .notEmpty().withMessage('Ingrese un nombre para su producto')
        .isLength({min: 2, max: 99}).withMessage('Debe contener un minimo de 2 caracteres.'),
    body('section')
        .notEmpty().withMessage('Debes seleccionar una sección'),
    body('price')
        .notEmpty().withMessage('Ingrese un valor')
        .isNumeric({min: 100, max: 9999999999}),
    body('discount')
        .isInt({min: 1, max: 99}).withMessage('Seleccione un valor entre 1 y 99'), 
    body('description')
        .notEmpty().withMessage('Ingrese una descripción de su producto')
]

     


module.exports = validateProducts; 