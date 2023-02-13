const express = require('express')
const routesController = require('../controllers/routesController.js')

const router = express.Router();

router.get("/skills", routesController.getSkills);
router.get("/projects", routesController.getProjects);
router.get("/projects/:id", routesController.getProject);

module.exports = router;