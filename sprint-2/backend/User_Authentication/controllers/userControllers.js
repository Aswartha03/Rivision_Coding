const UserModel = require ('../models/userModel');
const bcrypt = require ('bcrypt');
const saltRounds = 10;

var jwt = require ('jsonwebtoken');

let singUp = async (req, res) => {
  try {
    let {name, email, password} = req.body;
    let isUserExist = await UserModel.findOne ({email});
    if (isUserExist) {
      return res
        .status (400)
        .json ({message: 'User is already signup, please login...'});
    }
    /// need to hash the password
    bcrypt.hash (password, saltRounds, async function (err, hash) {
      if (hash) {
        password = hash;
        req.body.password = hash;
        let newUser = await UserModel.create (req.body);
        res.status (201).json ({message: 'User created', user: newUser});
      } else if (err) {
        res
          .status (500)
          .json ({message: 'Something went wrong :', Error: err.message});
      }
    });
  } catch (error) {
    res.status (500).json ({message: error.message});
  }
};

let login = async (req, res) => {
  try {
    let {email, password} = req.body;
    let isUserSignup = await UserModel.findOne ({email});
    if (!isUserSignup) {
      res.status (400).json ({message: 'User not found, please signup...'});
    }
    let hash = isUserSignup.password;
    // password verification
    bcrypt.compare (password, hash).then (function (result) {
      if (result) {
        // password matched
        // need to generate the token
        var token = jwt.sign (
          {role: isUserSignup.role, userId: isUserSignup._id},
          'shhhhh'
        );
        res.status (200).json ({message: 'Login Success', token});
      } else {
        res.status (401).json ({message: 'Password Wrong'});
      }
    });
  } catch (error) {
    res.status (500).json ({message: error.message});
  }
};

module.exports = {singUp, login};
