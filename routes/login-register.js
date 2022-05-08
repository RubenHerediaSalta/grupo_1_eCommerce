const express = require ('express'); 

const router = express.Router();

const controllerA = require('../controllers/login-register-controller.js')



router.get('/idProducto', controllerA.login) 


module.exports = router; 