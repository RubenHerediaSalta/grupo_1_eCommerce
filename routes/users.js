const express = require('express'); 
const router = express.Router();
const path = require('path');
const multer = require('multer'); 
const userControllers = require('../controllers/userControllers.js')
const { body } = require('express-validator')

//---------MULTER-------//
const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, 'public/images/users');
    },
    filename: (req,file,cb)=>{
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
let upload = multer({storage: storage});


//---------HOME DE LOGIN-------//
router.get('/login', userControllers.login); 

//---------HOME DE REGISTRO-------//
router.get('/register', userControllers.register); 
router.post('/register', upload.single('avatar'), /*validations*/ userControllers.store)


module.exports = router;    