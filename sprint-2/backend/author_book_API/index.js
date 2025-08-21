let express = require ('express');
const connectToDB = require ('./configs/db');
const bookRouter = require('./routes/bookRoutes');
const authorRouter = require('./routes/authorRouter');
let app = express ();
app.use (express.json ());

connectToDB ();

let port = 3000;

app.get ('/test', (req, res) => {
  res.status (200).json ({message: 'Test Route is Working'});
});

app.use("/author",authorRouter)
app.use("/book",bookRouter)

app.use ((req, res) => {
  res.status (404).json ({message: '404, Route is not found'});
});

app.listen (port, () => {
  console.log (`Server is running on ${port} port..`);
});
