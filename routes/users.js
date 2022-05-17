const express = require('express'); 
const router = express.Router();
const path = require('path')
const controllerLoginRegister = require('../controllers/userControllers.js')


router.get('/login', controllerLoginRegister.login); 
router.get('/register', controllerLoginRegister.register); 



module.exports = router;    