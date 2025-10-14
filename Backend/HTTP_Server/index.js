
let express = require("express");
let app = express()
app.use(express.json())

let port = 3000 

app.get("/",(req,res)=>{
  res.status(200).json({message:"Welcome to My Node.js Server!"})
})

app.get("/about",(req,res)=>{
    res.status(200).json({message:"This is a basic Node.js server created using the http module."})
})

app.use((req,res)=>{
    res.status(404).json({message:"404 Page Not Found"})
})

app.listen(port,()=>{
    console.log("Server is Running on the 3000 port")
})