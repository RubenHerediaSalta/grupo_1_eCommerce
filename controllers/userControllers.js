const bcryptjs = require('bcryptjs');
const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const User = require('../models/User')

const userController = {
    login: (req,res) => {
        res.render ('./users/login.ejs')
    },
    loginProcess: (req, res) => {
        let userToLogin = User.findByField('email', req.body.email);
        if(userToLogin){
            let passwordOK = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if(passwordOK){
                delete userToLogin.password;
                req.session.userLogged = userToLogin;

                if(req.body.drone){
                    res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60)* 5})
                }

                return res.redirect('./profile')
            }
            return res.render('./users/login.ejs', {
                errors: {
                    email: {
                        msg: 'CREDENCIALES INVALIDAS'
                    }
                }
            });
        }

       return res.render('./users/login.ejs', {
        errors: {
            email: {
                msg: 'CREDENCIALES INVALIDAS'
            }
        }
    });
    },
    profile: (req, res) => {
        return res.render('./users/profile', {
			user: req.session.userLogged
		});
	},
    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy()
        return res.redirect('/')
	},
    register: (req,res) => {
        res.render ('./users/register.ejs')
    },
    processRegister: (req,res)=>{
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
             return res.render('./users/register',{
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }

        let userInDB = User.findByField('email', req.body.email)
        if(userInDB){
            return res.render('./users/register.ejs', {
                errors: {
                    email: {
                        msg: 'EL CORREO YA ESTA EN USO'
                    }
                },
                oldData: req.body
            })
        }

        let avatar;
        if (req.file != undefined) {
            avatar = req.file.filename;
        } else {avatar = "default-image.png"}
        let userToCreate = {
            ...req.body,
            admin: false,
            password: bcryptjs.hashSync(req.body.password, 10),
            avatar: avatar
        }

        User.create(userToCreate)
        return res.render('./users/login.ejs');
    }
}; 


module.exports = userController;