const express = require('express'); 
const mainController = require('../controllers/mainControllers');
const router = express.Router(); 
const fs = require('fs');

//--------------HOME-----------//
router.get('/', mainController.index); 

module.exports = router