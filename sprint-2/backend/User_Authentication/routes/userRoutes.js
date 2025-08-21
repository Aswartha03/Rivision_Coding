let express = require ('express');
const { login, singUp } = require('../controllers/userControllers');

let userRouter = express.Router ();


// signup user
userRouter.post ('/signup', singUp);

/// login user
userRouter.post ('/login', login);



module.exports = userRouter;
