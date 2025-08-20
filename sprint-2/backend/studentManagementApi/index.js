let express = require ('express');
const connectToDb = require('./configs/db');
const studentRouter = require('./routes/studentRoutes');
let app = express ();
app.use (express.json ());

require ('dotenv').config ();
let PORT = process.env.PORT || 3000;

connectToDb()

// test route
app.get ('/test', (req, res) => {
  res.status (200).json ({message: 'Test Route is Working....'});
});
//student routes 
app.use("/student",studentRouter)
// un hanlded route
app.use ((req, res) => {
  res.status (404).json ({message: '404,Route is not found...'});
});

app.listen (PORT, () => {
  console.log (`Server Started at ${PORT} port...`);
});
