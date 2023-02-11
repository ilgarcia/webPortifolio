const express = require('express')
const routesController = require('../controllers/routesController.js')

const router = express.Router();

router.get("/skills", routesController.getSkills);

module.exports = router;