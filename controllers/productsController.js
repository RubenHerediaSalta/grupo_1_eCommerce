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
        res.render("./products/products.ejs", {products});
    },
    detail: (req, res) => {
		let producto = products.find(producto => producto.id == req.params.id);
		res.render("./products/detail", {producto})
	},
    create: (req, res) =>{
        res.render ('./products/createProducts.ejs')
    },
    store: (req, res) =>{
        let imagen;
        if (req.file != undefined) {
            imagen = req.file.filename;
        }
        let nuevoProducto = {
            id: products[products.length -1].id + 1,
            ...req.body,
            image: imagen
        };
        products.push(nuevoProducto);
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
        res.redirect("/products");
    }

}; 



module.exports = productsController; 