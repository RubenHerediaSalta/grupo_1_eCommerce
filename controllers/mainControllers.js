const db = require("../database/models")
const { validationResult } = require('express-validator');
const { sequelize } = require("../database/models");
const { application } = require("express");
const router = require("../routes/products");
const Sequelize = require('sequelize');
const Op = Sequelize.Op



/*const ofertas = products.filter(function(products){
	return products.category == "ofertas"
})*/

const mainController = {
    index: (req, res) => {
        db.Product.findAll({
            where:{ section: 6}
    })
        .then(function(products){
            res.render ("./home", {products:products})
    })
    },
 
    search:(req, res) => {
      const {term} = req.query;

      db.Product.findAll({
          where:{name:{[Op.like]:'%' + term + '%'}},
          include:["sections"]
        })
        .then(products=> res.render("./products/allProducts", {products:products}))
  }


}




module.exports = mainController; 