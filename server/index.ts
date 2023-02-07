import express from "express";

const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

app.get('/about', (req, res) => {
  res.send('This is my about route..... ')
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
  
export default app