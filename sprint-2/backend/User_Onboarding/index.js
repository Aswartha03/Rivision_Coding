let express = require("express");
const connectToDb = require("./configs/db");
const secretQuestionRouter = require("./routes/getSecretQuetions");
const userRouter = require("./routes/userRoutes");

let app = express()
app.use(express.json())
require("dotenv").config()

let Port = process.env.PORT || 3000

connectToDb()


app.get ('/test', (req, res) => {
  res.status (201).json ({message: 'Test Route is working'});
});

/// secrest questions routes 
app.use("/secret",secretQuestionRouter)
// user Routes 
app.use("/user",userRouter)
app.use ((req, res) => {
  res.status (404).json ({message: '404, Route is not found'});
});

app.listen (Port, () => {
  console.log (`Server is Running on the ${Port} port...`);
});
