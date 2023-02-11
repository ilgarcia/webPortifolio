const mongoose = require('mongoose')
require('dotenv').config()

mongoose.set("strictQuery", false);
mongoose.connect(
  process.env.SERVER_KEY,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

let db = mongoose.connection;

module.exports = db;
