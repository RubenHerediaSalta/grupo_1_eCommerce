const express = require('express'); 

const main = require('../controllers/mainControllers')

const router = express.Router(); 

router.get('/', main.index); 

module.exports = router