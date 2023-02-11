const Skills = require('../models/Skills.js')

const routesController = {
  getSkills: async (req, res) => {
    try {
      let skills = await Skills.find({});
      res.status(200).send(skills);
      // res.status(200).json(skills);
    } catch (err) {
      res.send(err);
    }
  },
};

module.exports = routesController;
