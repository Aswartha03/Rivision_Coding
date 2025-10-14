let express = require("express");
const { register, login, forgotPassword, resetPassword, getUsers } = require("../controllers/userController");

let userRouter = express.Router()

userRouter.post('/register',register)
userRouter.post('/login',login)
userRouter.post("/forgotpassword",forgotPassword)
userRouter.post("/resetpassword",resetPassword)
userRouter.get("/users",getUsers)
module.exports = userRouter