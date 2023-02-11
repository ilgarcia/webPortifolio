const mongoose = require('mongoose')

mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb+srv://ilgarcia:WebPort2023@cluster0.qhgthjc.mongodb.net/webPortfolio?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

let db = mongoose.connection;

module.exports = db;
