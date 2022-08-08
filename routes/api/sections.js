const express = require('express'); 
const router = express.Router();

const sectionsApiController = require('../../controllers/api/sectionsApiControllers'); 


router.get('/', sectionsApiController.list);
router.get('/:id', sectionsApiController.detail); 


module.exports = router