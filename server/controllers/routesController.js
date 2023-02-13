const Skills = require('../models/Skills.js')
const Projects = require('../models/Projects.js')

const routesController = {
  getSkills: async (req, res) => {
    try {
      let skills = await Skills.find({});
      res.status(200).send(skills);
    } catch (err) {
      res.send(err);
    }
  },
  getProjects: async (req, res) => {
    try {
      let projects = await Projects.find({});
      res.status(200).send(projects);
    } catch (err) {
      res.send(err);
    }
  },
  getProject: async (req, res) => {
    let id = req.params.id;

    try {
      let project = await Projects.findById(id);
      res.status(200).send(project);
      // res.status(200).json(skills);
    } catch (err) {
      res.send(err);
    }
  },
};

module.exports = routesController;
