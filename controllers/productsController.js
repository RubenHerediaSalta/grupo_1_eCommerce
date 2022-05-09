const productos = {

    notebook: (req,res) => {
        res.render ('./products/productDetailNotebook.ejs')
    },
    editar: (req,res) => {
        res.render ('./products/editProducts.ejs')
    },
    cart: (req,res) => {
        res.render ('./products/productCart.ejs')
    }

}; 



module.exports = productos; 