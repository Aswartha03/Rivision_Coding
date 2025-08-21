let express = require("express")
const authMiddleware = require("../middleware/authMiddleware")

let protectedRouter = express.Router()

protectedRouter.get("/check",authMiddleware("admin"),(req,res)=>{
    try {
        let userId = req.id
        console.log(userId);
        res.status(201).json({message:"This is the protected route , you are able access this route"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})


module.exports = protectedRouter 