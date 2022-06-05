const express = require('express'); 
const router = express.Router();
const userControllers = require('../controllers/userControllers.js')
const { body } = require('express-validator')

//---------MULTER-------//
const uploadUser = require('../middlewares/multerMiddlewareUsers');
const validations = require('../middlewares/validateRegisterMiddleware');


//---------HOME DE LOGIN-------//
router.get('/login', userControllers.login); 

//---------HOME DE REGISTRO-------//
router.get('/register', userControllers.register); 
router.post('/register', uploadUser.single('avatar'), validations, userControllers.processRegister)


module.exports = router;