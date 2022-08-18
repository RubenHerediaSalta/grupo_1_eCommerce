const { Op } = require("sequelize");
const express = require("express");
const path = require("path");
const router = express.Router();

const sectionsApiController = require('../../controllers/api/sectionsApiControllers'); 


router.get('/', sectionsApiController.list);
router.get("/count", sectionsApiController.countByCategory);


module.exports = router