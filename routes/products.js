const express = require ('express');
const router = express.Router(); 
const path = require('path');
const multer = require('multer');  
const productsControllers = require('../controllers/productsControllers.js'); 

//---------MULTER-------//
const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, 'public/images/products');
    },
    filename: (req,file,cb)=>{
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
let upload = multer({storage: storage});

//---------HOME DE PRODUCTOS-------//
router.get('/products', productsControllers.index);

//---------DETALLE DE PRODUCTOS-------//
router.get('/detail/:id/', productsControllers.detail);  

//---------CREAR PRODUCTOS-------//
router.get('/createProducts', productsControllers.create);
router.post('/', upload.single('image'), productsControllers.store)

//---------EDITAR PRODUCTOS-------//
router.get('/editProducts/:id/', productsControllers.editar);
router.put('/editProducts/:id/', upload.any(),productsControllers.editarModif); 


//----------BORRAR PRODUCTOS-----------//

router.delete('/editProducts/:id/', productsControllers.delete); 

 //---------CARRITO DE PRODUCTOS-------//
router.get('/productCart', productsControllers.cart); 


module.exports = router 