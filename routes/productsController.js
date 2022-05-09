const express = require ('express'); 

const router = express.Router(); 

const products = require('../controllers/productsController.js'); 

router.get('/productDetailNotebook', products.notebook); 
router.get('/editProducts', products.editar); 
router.get('/productCart', products.cart); 



module.exports = router 

