let express = require ('express');
const connectToDb = require ('./configs/db');
const userRouter = require('./routes/userRoutes');
const protectedRouter = require('./routes/protectedRoute');
let app = express ();
app.use (express.json ());

connectToDb ();

let port = 3000;

app.get ('/test', (req, res) => {
  res.status (201).json ({message: 'Test Route is working'});
});

app.use("/user",userRouter)
app.use("/protect",protectedRouter)
app.use ((req, res) => {
  res.status (404).json ({message: '404, Route is not found'});
});

app.listen (port, () => {
  console.log (`Server is Running on the ${port} port...`);
});
