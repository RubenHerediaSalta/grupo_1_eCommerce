const express = require('express'); 
const mainController = require('../controllers/mainControllers');
const router = express.Router(); 
const fs = require('fs');


router.get('/', mainController.index); 

module.exports = router