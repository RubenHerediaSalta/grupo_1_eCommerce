const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const productsController = {

   
    editar: (req,res) => {
        res.render ('./products/editProducts.ejs')
    },
    cart: (req,res) => {
        res.render ('./products/productCart.ejs')
    },
    index: (req, res) => {
        res.render("/", {products});
    },
    detail: (req, res) => {
		let producto = products.find(producto => producto.id == req.params.id);
		res.render("./products/detail", {producto})
	}

}; 



module.exports = productsController; 