const express = require('express'); 
const router = express.Router();
const productsApiControllers = require('../../controllers/api/productsApiControllers')

// Ruta APIS // 

router.get('/', productsApiControllers.list); 

module.exports = router; 