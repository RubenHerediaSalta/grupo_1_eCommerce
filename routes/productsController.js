const express = require ('express'); 

const router = express.Router(); 

const productsController = require('../controllers/productsController.js'); 

router.get('/editProducts', productsController.editar); 
router.get('/productCart', productsController.cart); 
router.get('/', productsController.index); 
router.get('/detail/:id/', productsController.detail); 



module.exports = router 