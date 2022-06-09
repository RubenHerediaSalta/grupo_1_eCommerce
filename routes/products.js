const express = require ('express');
const router = express.Router(); 
const path = require('path');
const multer = require('multer');  
const productsControllers = require('../controllers/productsControllers.js'); 

//---------MULTER-------//
const uploadProduct = require('../middlewares/multerMiddlewareProducts');

//---------HOME DE PRODUCTOS-------//
router.get('/', productsControllers.index);

//---------DETALLE DE PRODUCTOS-------//
router.get('/detail/:id/', productsControllers.detail);  

//---------CREAR PRODUCTOS-------//
router.get('/createProducts', productsControllers.create);
router.post('/', uploadProduct.single('image'), productsControllers.store)

//---------EDITAR PRODUCTOS-------//
router.get('/editProducts/:id/', productsControllers.editar);
router.put('/editProducts/:id/', uploadProduct.any(),productsControllers.editarModif); 


//----------BORRAR PRODUCTOS-----------//

router.delete('/editProducts/:id/', productsControllers.delete); 

 //---------CARRITO DE PRODUCTOS-------//
router.get('/productCart', productsControllers.cart); 


module.exports = router 