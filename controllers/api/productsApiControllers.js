const path = require('path');
const db = require('../../database/models')
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');

// const Products = db.Product; 

const productsApiController = {
    'list': (req,res) => {
        db.Product.findAll()
        .then(products => {
            let respuesta = {
                meta: {
                    status: 200, 
                    total: products.length, 
                    url: 'api/products'
                },
                data: products 
            }
            res.json(respuesta); 
        })
    },
    'detail': (req, res) => {
        db.Product.findByPk(req.params.id) 

        .then(product => {
            let respuesta = {
                meta: {
                    status: 200, 
                    total: product.lenght,
                    url: 'api/products/:id'
                },
                data: product
            }
            res.json(respuesta); 
        })
	},

}

module.exports = productsApiController; 