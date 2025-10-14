let express = require("express");
const connectToDb = require("./configs/db");
const userRouter = require("./routes/userRouts");
const loggerMiddleware = require("./middleware/logger");
require("dotenv").config()
let app = express()
app.use(express.json())
let port = process.env.PORT

connectToDb()

app.use(loggerMiddleware)
app.get("/",(req,res)=>{
    res.status(200).json({message:"Test Route is Working"})
})

app.use("/user",userRouter)

app.use((req,res)=>{
    res.status(404).json({message:"404, Route is not found"})
})

app.listen(port,()=>{
    console.log(`Server is Running on the ${port} port.`);
})


