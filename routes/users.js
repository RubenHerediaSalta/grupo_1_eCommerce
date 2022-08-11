const express = require('express'); 
const router = express.Router();
const { body } = require('express-validator');
const userControllers = require('../controllers/userControllers.js')
const guestMiddleware = require('../middlewares/guestMiddleware.js')
const loginMiddleware = require('../middlewares/loginMiddleware.js')

//---------MULTER-------//
const uploadUser = require('../middlewares/multerMiddlewareUsers');
const validations = require('../middlewares/validateRegisterMiddleware');

//---------HOME DE LOGIN-------//
router.get('/login',guestMiddleware , userControllers.login); 
router.post('/login', userControllers.loginProcess); 

//---------HOME DE REGISTRO-------//
router.get('/register', guestMiddleware, userControllers.register); 
router.post('/register', uploadUser.single('avatar'), validations, userControllers.processRegister)

//---------PERFIL DE USUARIO-------//
router.get('/profile/', loginMiddleware, userControllers.profile);
//router.get('/profile/:id/', loginMiddleware, userControllers.profile);
router.get('/logout', userControllers.logout)

//---------EDITAR USUARIO-------//
router.get('/editUser/:id/', userControllers.editar);
router.put('/editUser/:id/', uploadUser.single('avatar'), userControllers.editarModif); 

//---------BORRAR USUARIO-------//
router.delete('/delete/:id/', userControllers.delete); 

//------LISTADO DE USUARIOS-----// (ADMIN)


module.exports = router;