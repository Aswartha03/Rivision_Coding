let express = require ('express');
const connectToDb = require ('./configs/db');
const taskRouter = require('./routes/tasksRoutes');
let app = express ();
app.use (express.json ());
var cors = require('cors')
app.use(cors())
connectToDb ();


app.use("/task",taskRouter)

app.use ((req, res) => {
  res.status (404).json ({message: '404, Route is not found'});
});

app.listen (3000, () => {
  console.log (`Server is Running in the 3000 port....`);
});
