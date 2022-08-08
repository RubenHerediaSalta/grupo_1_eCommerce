const path = require('path');
const db = require('../../database/models')
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');

const sectionsApiController = {
    'list': (req,res) => {
        db.Section.findAll()
        .then(sections => {
            let respuesta = {
                meta: {
                    status: 200, 
                    total: sections.length, 
                    url: 'api/sections'
                },
                data: sections 
            }
            res.json(respuesta); 
        })
    },
    'detail': (req, res) => {
        db.Section.findByPk(req.params.id) 

        .then(section => {
            let respuesta = {
                meta: {
                    status: 200, 
                    total: section.lenght,
                    url: 'api/sections/:id'
                },
                data: section
            }
            res.json(respuesta); 
        })
	},

}

module.exports = sectionsApiController; 