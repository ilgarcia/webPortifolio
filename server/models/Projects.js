const mongoose = require("mongoose");

const projectsSchema = new mongoose.Schema({
  title: String,
  image: String,
  type: String,
  text: String,
  tools: [{ title: String }],
  icons: [{ title: String, module: String, icon: String }],
  featured: Boolean,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Projects", projectsSchema);
