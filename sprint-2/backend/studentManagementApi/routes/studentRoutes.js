let express = require("express") ;
let studentRouter = express.Router()

studentRouter.post("/post",async(req,res)=>{
    try {
        let details = req.body
        console.log(details);
        res.status(201).json({message:"Student Added"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})



module.exports = studentRouter;