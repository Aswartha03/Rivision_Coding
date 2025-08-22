const UserModel = require ('../models/userModel');
const bcrypt = require ('bcrypt');
const saltRounds = 10;

let signUp = async (req, res) => {
  try {
    let {name, email, password} = req.body;
    let isUserExist = await UserModel.findOne ({email});
    if (isUserExist) {
      return res
        .status (201)
        .json ({message: 'User is already signup,please login'});
    }
    // store the user by hashing the password
    bcrypt.hash (password, saltRounds, async function (err, hash) {
      if (hash) {
        req.body.password = hash;
        let newUser = await UserModel.create (req.body);
        res.status (201).json ({message: 'User created', user: newUser});
      } else {
        res.status (500).json ({message: err.message});
      }
    });
  } catch (error) {
    res.status (500).json ({message: error.message});
  }
};

let login = async (req, res) => {
  try {
    let {email, password} = req.body;
    if (!email || !password) {
      res.status (401).json ({message: 'Please provide email and password'});
    }
    let isUserExist = await UserModel.findOne ({email});
    if (!isUserExist) {
      return res.status (401).json ({message: 'User not found, please signup'});
    }
    let hash = isUserExist.password 
    // verifying the password
    bcrypt.compare (password, hash, function (err, result) {
      if(result){
        // password is matched 
        res.status(200).json({message:"login success"})
      }else{
        // password not matched 
        res.status(402).json({message:"Wrong password"})
      }
    });
  } catch (error) {
    res.status (500).json ({message: error.message});
  }
};
module.exports = {signUp , login};
