const db = require("../database/models")
const Sequelize = require('sequelize');
const Op = Sequelize.Op


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