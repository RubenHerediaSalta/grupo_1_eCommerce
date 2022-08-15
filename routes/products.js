const express = require ('express');
const router = express.Router(); 
const path = require('path');
const multer = require('multer');  
const { body } = require('express-validator');
const productsControllers = require('../controllers/productsControllers.js'); 
const validationProducts = require('../middlewares/validateProductsMiddleware'); 
const productsMiddleware = require('../middlewares/productsMiddleware.js')

//---------MULTER-------//
const uploadProduct = require('../middlewares/multerMiddlewareProducts');

//---------TODOS LOS PRODUCTOS-------//
router.get('/allProducts', productsControllers.allProducts);

//---------DETALLE DE PRODUCTOS-------//
router.get('/detail/:id/',uploadProduct.single('image'), productsControllers.detail);  

//---------CREAR PRODUCTOS-------//
router.get('/createProducts', productsMiddleware, productsControllers.create);
router.post('/createProducts', uploadProduct.single('image'), validationProducts, productsControllers.store)

//---------EDITAR PRODUCTOS-------//
router.get('/editProducts/:id/', productsMiddleware, productsControllers.editar);
router.put('/editProducts/:id/', uploadProduct.single('image'),validationProducts, productsControllers.editarModif); 

//----------BORRAR PRODUCTOS-----------//
router.delete('/delete/:id/', productsMiddleware, productsControllers.delete); 

 //---------CARRITO DE PRODUCTOS-------//
router.get('/productCart', productsControllers.cart); 

//---------SECCIONES-------//
router.get('/notebooks', productsControllers.notebooks);
router.get('/monitores', productsControllers.monitores);
router.get('/placasdevideo', productsControllers.placasdevideo);
router.get('/almacenamiento', productsControllers.almacenamiento);
router.get('/perifericos', productsControllers.perifericos);
router.get('/ofertas', productsControllers.ofertas);



module.exports = router 