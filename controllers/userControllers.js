const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');


const userController = {
    login: (req,res) => {
        res.render ('./users/login.ejs')
    }, 
    register: (req,res) => {
        res.render ('./users/register.ejs')
    },
    processRegister: (req,res)=>{
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            res.render('./users/register',{
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        return res.send('Ok, las validaciones se pasaron y no tienes errores');
    }
}; 


module.exports = userController; 