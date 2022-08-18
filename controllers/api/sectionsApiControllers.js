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
    'countByCategory': (req, res) => {
         db.Section.sequelize.query('SELECT sections.name, COUNT(products.id) as total FROM products INNER JOIN sections ON sections.id=section group by sections.name')
        .then(sections => {
            let respuesta = {
                meta: {
                    status: 200, 
                    total: sections.length, 
                    url: 'api/sections/count'
                },
                data: sections[0]
            }
            res.json(respuesta); 
        })
    }

}

module.exports = sectionsApiController; 