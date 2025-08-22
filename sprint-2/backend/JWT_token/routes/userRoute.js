let express = require ('express');
const { signUp, login } = require('../controllers/userController');


let userRouter = express.Router ();

userRouter.post("/signup",signUp)
userRouter.post("/login",login) 



module.exports = userRouter;
