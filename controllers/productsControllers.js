const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const db = require("../database/models")


const productsController = {

    editar: (req,res) => {
        let pedidoProducto = db.Product.findByPk(req.params.id)
        let pedidoSection = db.Section.findAll()

        Promise.all([pedidoProducto, pedidoSection])
        .then(function([products, sections]){
            res.render('./products/editProducts', {products:products, sections:sections})
        })
    },
    
 editarModif: (req,res) => {
    let image;
    if (req.file != undefined) {
        image = req.file.filename;
    } else {image = "default-image.png"}

    db.Product.update({
        ...req.body,
       
        image: image
    }, {
        where: {
            id: req.params.id
        }
    }) 
    res.redirect('/products/detail/' + req.params.id)
},



    cart: (req,res) => {
        res.render ('./products/productCart')
    },
    index: (req, res) => {
        db.Product.findAll()
        .then(function(products){
            res.render ("./products/products", {products:products})
        })
    },
    detail: (req, res) => {

        db.Product.findByPk(req.params.id, {include:['sections']})
        .then(function(products){
            res.render ('./products/detail', {products:products})
        })
	},
    create: (req, res) =>{
        db.Section.findAll()
        .then(function(sections){
            res.render ('./products/createProducts', {sections:sections})
        })
    },
    store: (req, res) =>{
        let image;
        if (req.file != undefined) {
            image = req.file.filename;
        } else {image = "default-image.png"}
        db.Product.create({
            ...req.body,
            image: image
        })
        res.redirect("/products")
    },
    delete: (req,res) => {

        db.Product.destroy({
            where: {
                id: req.params.id
            }
        })
              
        res.redirect('/products'); 
    }
}

                             
module.exports = productsController; 