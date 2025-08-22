let express = require ('express');
const {
  signUp,
  login,
  updateProfile,
  forgotPasswrord,
  verifySecret,
  resetPassword,
} = require ('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
let userRouter = express.Router ();

// signup
userRouter.post ('/signup', signUp);
// login
userRouter.post ('/login', login);
// update 
// only accessable if login
userRouter.put ('/update', authMiddleware,updateProfile);
// forgot password 
userRouter.post("/forgot-password",forgotPasswrord)
// verify secret 
userRouter.post("/verify-secret",verifySecret) 
// reset password 
userRouter.post("/reset-password",authMiddleware,resetPassword)




module.exports = userRouter;
