const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const ofertas = products.filter(function(products){
	return products.category == "ofertas"
})

const mainController = {
    index: (req,res) => {
        res.render ('./home.ejs', {ofertas})
    }

}; 


module.exports = mainController; 