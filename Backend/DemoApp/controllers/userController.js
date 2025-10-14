const userModel = require ('../models/userModel');
require("dotenv").config()
const bcrypt = require ('bcrypt');
const saltRounds = 10;
var jwt = require ('jsonwebtoken');

let signupUser = async (req, res) => {
  try {
    let userData = req.body;
    let isUserExist = await userModel.findOne ({email: userData.email});
    if (isUserExist) {
      return res
        .status (200)
        .json ({message: 'User already signup , please login...'});
    }
    bcrypt.hash (userData.password, saltRounds, async function (err, hash) {
      if (hash) {
        userData.password = hash;
        let newUser = await userModel.create (userData);
        return res.status (201).json ({message: 'User Created', user: newUser});
      } else {
        return res.status (400).json ({message: err});
      }
    });
  } catch (error) {
    return res.status (500).json ({message: error.message});
  }
};

let login = async (req, res) => {
  let {email, password} = req.body;
  if (!email || !password) {
    return res
      .status (400)
      .json ({message: 'Email and password required to login...'});
  }
  let isUserExist = await userModel.findOne ({email});
  if (!isUserExist) {
    return res.status (404).json ({message: 'User not found , please signup'});
  }
  bcrypt.compare (password, isUserExist.password, function (err, result) {
    if (err) {
      return res.status (401).json ({message: 'Password Wrong'});
    } else {
      var token = jwt.sign (
        {userId: isUserExist._id, role: isUserExist.role},
        process.env.JWT_SECURITY_CODE,
        {expiresIn:"2h"}
      );
      return res.status (200).json ({message: 'Login Success', token});
    }
  });
};

module.exports = {signupUser, login};
