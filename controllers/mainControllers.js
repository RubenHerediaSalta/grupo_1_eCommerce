const db = require("../database/models")
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

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
    }
}



module.exports = mainController; 