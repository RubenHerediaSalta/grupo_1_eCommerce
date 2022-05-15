const express = require ('express'); 
const { path } = require('express/lib/application');
const router = express.Router(); 
const multer = require('multer');  
const productsController = require('../controllers/productsController.js'); 

//---------MULTER-------//
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, 'public/images/products');
    },
    filename: function(req,file,cb){
        let nameproduct = 'newproduct' + Date.now() + path.extname('file.originalname')
        cb(null, nameproduct)
    }
})
const upload = multer({storage});

//---------HOME DE PRODUCTOS-------//
router.get('/products', productsController.index);

//---------DETALLE DE PRODUCTOS-------//
router.get('/detail/:id/', productsController.detail);  

//---------CREAR PRODUCTOS-------//
router.get('/createProducts', productsController.create);
router.post('/', upload.single('image'), productsController.store)

//---------EDITAR PRODUCTOS-------//
router.get('/editProducts', productsController.editar);

 //---------CARRITO DE PRODUCTOS-------//
router.get('/productCart', productsController.cart); 


module.exports = router 