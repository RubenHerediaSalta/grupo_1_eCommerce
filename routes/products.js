const express = require ('express');
const router = express.Router(); 
const path = require('path');
const multer = require('multer');  
const productsControllers = require('../controllers/productsControllers.js'); 

//---------MULTER-------//
const uploadProduct = require('../middlewares/multerMiddlewareProducts');

//---------TODOS LOS PRODUCTOS-------//
router.get('/allProducts', productsControllers.allProducts);

//---------DETALLE DE PRODUCTOS-------//
router.get('/detail/:id/',uploadProduct.single('image'), productsControllers.detail);  

//---------CREAR PRODUCTOS-------//
router.get('/createProducts', productsControllers.create);
router.post('/', uploadProduct.single('image'), productsControllers.store)

//---------EDITAR PRODUCTOS-------//
router.get('/editProducts/:id/', productsControllers.editar);
router.put('/editProducts/:id/', uploadProduct.single('image'),productsControllers.editarModif); 

//----------BORRAR PRODUCTOS-----------//
router.delete('/delete/:id/', productsControllers.delete); 

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