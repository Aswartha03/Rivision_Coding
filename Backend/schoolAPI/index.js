let express = require("express")
const connectToDb = require("./configs/db");
const teacherRouter = require("./routes/teacherRoutes");
const studentRouter = require("./routes/studentRoutes");
const classRouter = require("./routes/classRoutes");
let app = express()
app.use(express.json())
require ('dotenv').config ();

connectToDb()

app.get('/',(req,res)=>{
    res.status(200).json({message:"Test Route is Working"})
})

app.use("/teacher",teacherRouter)
app.use("/student",studentRouter)
app.use("/class",classRouter)

app.use((req,res)=>{
    res.status(404).json({message:"404, Page not found"})
})

let port = process.env.PORT 
app.listen(port,()=>{
    console.log("server is running on 3000 port...");
})
