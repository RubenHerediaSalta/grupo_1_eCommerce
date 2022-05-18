const express = require ('express');
const path = require('path');
const router = express.Router(); 
const multer = require('multer');  
const productsController = require('../controllers/productsController.js'); 

//---------MULTER-------//
const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, 'public/images/products');
    },
    filename: (req,file,cb)=>{
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({storage: storage});

//---------HOME DE PRODUCTOS-------//
router.get('/products', productsController.index);

//---------DETALLE DE PRODUCTOS-------//
router.get('/detail/:id/', productsController.detail);  

//---------CREAR PRODUCTOS-------//
router.get('/createProducts', productsController.create);
router.post('/', upload.single('image'), productsController.store)

//---------EDITAR PRODUCTOS-------//
router.get('/editProducts/:id/', productsController.editar);
router

 //---------CARRITO DE PRODUCTOS-------//
router.get('/productCart', productsController.cart); 


module.exports = router 