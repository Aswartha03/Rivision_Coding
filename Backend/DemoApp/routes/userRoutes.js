let express = require("express")
const { signupUser, login } = require("../controllers/userController")

let userRouter = express.Router()

// signup 
userRouter.post("/signup",signupUser)
userRouter.post("/login",login)
module.exports = userRouter 