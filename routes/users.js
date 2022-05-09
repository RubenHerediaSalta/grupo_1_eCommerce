const express = require('express'); 

const controllerLoginRegister = require('../controllers/userControllers.js')

const router = express.Router(); 



router.get('/login', controllerLoginRegister.login); 
router.get('/register', controllerLoginRegister.register); 



module.exports = router;    