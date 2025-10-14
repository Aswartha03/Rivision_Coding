const userModel = require ('../models/userModel');

const bcrypt = require ('bcrypt');
const saltRounds = 10;
var jwt = require ('jsonwebtoken');
let register = async (req, res) => {
  try {
    let {email, password} = req.body;
    let isUserExist = await userModel.findOne ({email});
    if (isUserExist) {
      return res
        .status (200)
        .json ({message: 'User already registered , please login..'});
    }
    bcrypt.hash (password, saltRounds, async function (err, hash) {
      if (hash) {
        let newUserDetails = {...req.body, password: hash};
        let user = await userModel.create (newUserDetails);
        return res.status (201).json ({message: 'User Created', user});
      } else if (err) {
        return res.status (500).json ({message: err.message});
      }
    });
  } catch (error) {
    return res.status (500).json ({message: error.message});
  }
};

let login = async (req, res) => {
  try {
    let {email, password} = req.body;
    if (!email || !password) {
      return res
        .status (400)
        .json ({message: 'Email and password are required to login'});
    }
    let isUserExist = await userModel.findOne ({email});
    if (!isUserExist) {
      return res
        .status (400)
        .json ({message: 'User not found , please register'});
    }
    bcrypt.compare (password, isUserExist.password, function (err, result) {
      if (err) {
        return res
          .status (500)
          .json ({message: 'Something went wrong', error: err.message});
      }
      if (result) {
        return res.status (200).json ({message: 'Login Success'});
      } else {
        return res.status (401).json ({message: 'Invalid Password'});
      }
    });
  } catch (error) {
    return res.status (500).json ({message: error.message});
  }
};
let forgotPassword = async (req, res) => {
  try {
    let {email} = req.body;
    if (!email) {
      return res.status (400).json ({message: 'Email required'});
    }
    let user = await userModel.findOne ({email});
    if (!user) {
      return res.status (404).json ({message: 'User not found'});
    }
    let token = jwt.sign ({userId: user._id}, 'shhhhh', {expiresIn: '1h'});
    await userModel.findByIdAndUpdate (user._id, {
      resetToken: token,
      resetTokenExpiry: Date.now () + 3600000,
    });
    return res.status (200).json ({
      message: 'Password reset token generated (valid for 1 hour)',
      token,
    });
  } catch (error) {
    return res.status (500).json ({message: error.message});
  }
};

let resetPassword = async (req, res) => {
  try {
    // Accepts token and newPassword.
    let {token, newpassword} = req.body;
    if (!token || !newpassword) {
      return res.status (400).json ({message: 'Invalid Credentials'});
    }
    // Validate token and expiry.
    var decoded = jwt.verify (token, 'shhhhh');
    if (!decoded) {
      return res.status (500).json ({message: 'Invalid Token'});
    }
    // Hash the new password and save it.
    let user = await userModel.findById (decoded.userId);
    bcrypt.hash (newpassword, saltRounds, async function (err, hash) {
      if (hash) {
        // Clear the token and expiry fields.
        user.password = hash 
        user.resetTokenExpiry = undefined 
        user.resetToken = undefined 
        await user.save()
         // Return a success response.
        return res.status (201).json ({message: 'Password Updated..' });
      } else if (err) {
        return res.status (500).json ({message: err.message});
      }
    });
    
  } catch (error) {
    if (error.message == 'token expired') {
      return res.status (401).json ({message: 'Token Expired'});
    }
    return res.status (500).json ({message: error.message});
  }
};
let getUsers = async (req, res) => {
  try {
    let users = await userModel.find ();
    if (users.length == 0) {
      return res.status (200).json ({message: 'No users found'});
    }
    return res.status (200).json ({message: 'Users', users});
  } catch (error) {
    return res.status (500).json ({message: error.message});
  }
};

module.exports = {register, login, forgotPassword, resetPassword, getUsers};
