const db = require("../database/models")
const { validationResult } = require('express-validator');

const productsController = {

    editar: (req,res) => {
        let pedidoProducto = db.Product.findByPk(req.params.id)
        let pedidoSection = db.Section.findAll()

        Promise.all([pedidoProducto, pedidoSection])
        .then(function([products, sections]){
            res.render('./products/editProducts', {products:products, sections:sections})
        })
    },
    editarModif: (req, res) =>{
        const validacionesEdit = validationResult(req)
        let image;
        if (req.file != undefined) {
            image = req.file.filename;
        } else {image = "default-image.png"}
        
        if (validacionesEdit.errors.length > 0) {

        let pedidoProducto = db.Product.findByPk(req.params.id)
        let pedidoSection = db.Section.findAll()

        Promise.all([pedidoProducto, pedidoSection])
        .then(function([products, sections]){
            res.render('./products/editProducts', {
                products:products, 
                sections:sections, 
                errors: validacionesEdit.mapped(),
                oldData: req.body
            })
        })

        } else {
            db.Product.update({
                ...req.body,
                image: image
            },{
                where:{
                    id: req.params.id
                }
            })
            res.redirect("/products/allProducts")

        }


       
    },

    
    cart: (req,res) => {
        res.render ('./products/productCart')
    },
    allProducts: (req, res) => {
        db.Product.findAll()
        .then(function(products){
            res.render ("./products/allProducts", {products:products})
        })
    },
    detail: (req, res) => {
        db.Product.findByPk(req.params.id,
            {
                include : ['sections']
            })
        .then(function(products){
            res.render("./products/detail", {products:products})
        })
	},
    create: (req, res) =>{
        db.Section.findAll()
        .then(function(sections){
            res.render ('./products/createProducts', {sections:sections})
        })
    },
    store: async(req, res) =>{
        const validaciones = validationResult(req)
            let image;
        if (req.file != undefined) {
            image = req.file.filename;
        } else {image = "default-image.png"}

        if (validaciones.errors.length > 0) {

            db.Section.findAll()
            .then(function(sections){
                res.render('./products/createProducts',{
                    sections: sections,
                    errors: validaciones.mapped(),
                    oldData: req.body
                })
            })
                  
       } else {
            db.Product.create({
                ...req.body,
                image: image
            })
            res.redirect('/products/allProducts')
        }
        
        
    },
    delete: (req,res) => {
        db.Product.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect("/products/allProducts")
    },
// -----------------SECCIONES-------------------------//

    notebooks: (req, res) => {
        db.Product.findAll({
            where:{ section: 1}
    })
        .then(function(products){
            res.render ("./products/notebooks", {products:products})
    })
    },
    monitores: (req, res) => {
        db.Product.findAll({
            where:{ section: 2}
    })
        .then(function(products){
            res.render ("./products/monitores", {products:products})
    })
    },
    placasdevideo: (req, res) => {
        db.Product.findAll({
            where:{ section: 3}
    })
        .then(function(products){
            res.render ("./products/placasdevideo", {products:products})
    })
    }
    ,almacenamiento: (req, res) => {
        db.Product.findAll({
            where:{ section: 4}
    })
        .then(function(products){
            res.render ("./products/almacenamiento", {products:products})
    })
    },
    perifericos: (req, res) => {
        db.Product.findAll({
            where:{ section: 5}
    })
        .then(function(products){
            res.render ("./products/perifericos", {products:products})
    })
    },
    ofertas: (req, res) => {
        db.Product.findAll({
            where:{ section: 6}
    })
        .then(function(products){
            res.render ("./products/ofertas", {products:products})
    })
    }
//-------------------------------------------------------//
}

                             
module.exports = productsController; 