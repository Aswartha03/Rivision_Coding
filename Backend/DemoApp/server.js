const connectToDb = require ('./configs/db');
require ('dotenv').config ();
const cors = require ('cors');
let express = require ('express');
const userRouter = require('./routes/userRoutes');
const postRouter = require('./routes/postRoutes');

let app = express ();
app.use (express.json());
app.use(cors())
let port = process.env.PORT || 3000;

connectToDb ();

// basic test route
app.get ('/', (req, res) => {
  res.status (200).json ({message: 'Test Route is Working'});
});

// user routes
app.use("/user",userRouter)

// post routes
app.use("/post",postRouter)


// un handled routes
app.use ((req, res) => {
  res.status (404).json ({message: '404, Route is not found'});
});

// port listen
app.listen (port, () => {
  console.log (`Server is running on the ${port} port...`);
});
