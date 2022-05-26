const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const productsController = {

    editar: (req,res) => {
        let producto = products.find(producto => producto.id == req.params.id);
        res.render ('./products/editProducts', {producto})
    },

    editarModif: (req,res) => {
        let id = req.params.id; 
        let productoEdit = products.find(producto => producto.id == id); 
        let image 

        if (req.file != undefined) {
            image = req.file.filename;
        } else {
            image = "default-image.png";
        }

       productoEdit = {
            id: productoEdit.id,
            ...req.body,
            image:image
        }

        let newProducts = products.map(products => {
            if (products.id == productoEdit.id) {
                return products = {...productoEdit}; 
            }

            return products; 
        
        })

        fs.write
        FileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
        res.redirect('/')


        
    },
    cart: (req,res) => {
        res.render ('./products/productCart')
    },
    index: (req, res) => {
        res.render("./products/products", {products});
    },
    detail: (req, res) => {
		let producto = products.find(producto => producto.id == req.params.id);
		res.render("./products/detail", {producto})
	},
    create: (req, res) =>{
        res.render ('./products/createProducts')
    },
    store: (req, res) =>{
        let image;
        if (req.file != undefined) {
            image = req.file.filename;
        } else {
            image = "default-image.png";
        }
        let newProduct = {
            id: products[products.length - 1].id + 1,
            ...req.body,
            price: Number(req.body.price),
            discount: Number(req.body.discount),
            image: image
        };
        products.push(newProduct);
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
        res.redirect("/products");
    },

    delete: (req,res) => {
        let id = req.params.id; 
        let borrarProducto = products.filter(borrar => borrar.id != id); 

        fs.writeFileSync(productsFilePath, JSON.stringify(borrarProducto, null, ' '));
        res.redirect('/'); 
    }
}

                             
module.exports = productsController; 