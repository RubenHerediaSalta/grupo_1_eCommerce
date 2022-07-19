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
    editarModif: (req, res) =>{
        let image;
        if (req.file != undefined) {
            image = req.file.filename;
        } else {image = "default-image.png"}
        db.Product.update({
            ...req.body,
            image: image
        },{
            where:{
                id: req.params.id
            }
        })
        res.redirect("/products/allProducts")
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
    store: (req, res) =>{
        let image;
        if (req.file != undefined) {
            image = req.file.filename;
        } else {image = "default-image.png"}
        db.Product.create({
            ...req.body,
            image: image
        })
        res.redirect("/products/allProducts")
    },
    delete: (req,res) => {
        db.Product.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect("/products")
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