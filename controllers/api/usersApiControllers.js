const path = require('path');
const db = require('../../database/models')
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');

// const User = db.User; 

const usersApiControllers = {
    'list': (req,res) => {
        db.User.findAll()
        .then(users => {
            let respuesta = {
                meta: {
                    status: 200, 
                    total: users.length, 
                    url: 'api/users'
                },
                data: users 
            }
            res.json(respuesta); 
        })
    }, 

    'detail': (req, res) => {
        db.User.findByPk(req.params.id) 

        .then(user => {
            let respuesta = {
                meta: {
                    status: 200, 
                    total: user.lenght,
                    url: 'api/users/:id'
                },
                data: user
            }
            res.json(respuesta); 
        })
	}


}

module.exports = usersApiControllers; 