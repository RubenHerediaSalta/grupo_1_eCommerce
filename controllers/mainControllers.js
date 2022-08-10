const db = require("../database/models")

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