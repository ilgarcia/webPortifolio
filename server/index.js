const express = require('express')

const cors = require('cors')
const corsOptions = require('./config/corsOption.js')

const routes = require('./routes/routes.js')

const db = require('./database/mongoose.js')

const app = express();
const port = 8000;

db.on("error", () => {
  console.log("Houve um erro");
});
db.once("open", () => {
  console.log("Banco carregado");
});

app.use(cors(corsOptions));

app.use(express.json());

app.use("/", routes);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});

module.exports = app;