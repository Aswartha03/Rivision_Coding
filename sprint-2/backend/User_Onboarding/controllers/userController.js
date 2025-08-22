const UserModel = require ('../models/userModel');
const bcrypt = require ('bcrypt');
const saltRounds = 10;

var jwt = require ('jsonwebtoken');

require ('dotenv').config ();

let signUp = async (req, res) => {
  try {
    let {email, password, questionId, answer} = req.body;
    if (!questionId || !answer) {
      return res.status (401).json ({
        message: 'Please select one secret question and give the answer for that before signup...',
      });
    }
    let isUserExist = await UserModel.findOne ({email});
    if (isUserExist) {
      return res
        .status (200)
        .json ({message: 'User already Exist, please login'});
    }
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
    res.status (500).json ({Error: error.message});
  }
};

let login = async (req, res) => {
  try {
    let {email, password} = req.body;
    if (!email || !password) {
      return res.status (403).json ({message: 'Provide email and pasword'});
    }
    let isUserExist = await UserModel.findOne ({email});
    if (!isUserExist) {
      return res.status (401).json ({message: 'User not found, please signup'});
    }
    let hash = isUserExist.password;
    bcrypt.compare (password, hash).then (function (result) {
      if (result) {
        var token = jwt.sign (
          {
            questionId: isUserExist.questionId,
            answer: isUserExist.answer,
            userId: isUserExist._id,
          },
          process.env.JWT_SECRET_CODE
        );
        res.status (200).json ({message: 'Login Success', token});
      } else {
        res.status (401).json ({message: 'Password Wrong'});
      }
    });
  } catch (error) {
    res.status (500).json ({Error: error.message});
  }
};

// update profile -> protected route
let updateProfile = async (req, res) => {
  try {
    let newDetails = req.body;
    if (newDetails.email) {
      return res.status (400).json ({message: "Email can't be updated"});
    }
    let userId = req.id;
    let user = await UserModel.findById (userId);
    if (!user) {
      return res.status (404).json ({message: 'User not found'});
    }
    if (newDetails.password) {
      const hash = await bcrypt.hash (newDetails.password, 10);
      newDetails.password = hash;
    }
    Object.assign (user, newDetails);
    await user.save ();
    res.status (200).json ({message: 'User updated successfully', user});
  } catch (error) {
    res
      .status (500)
      .json ({message: 'Something went wrong', error: error.message});
  }
};
// forgot password
let secretQuetions = require ('../configs/questions.json');
let allQuestions = secretQuetions.questions;

let forgotPasswrord = async (req, res) => {
  try {
    let {email} = req.body;
    if (!email) {
      return res.status (401).json ({message: 'Email needed'});
    }
    let isUserExist = await UserModel.findOne ({email});
    if (!isUserExist) {
      return res
        .status (400)
        .json ({message: 'User not found , please signup'});
    }
    // userFound
    let questionId = isUserExist.questionId;
    let question = allQuestions.filter (question => question.id === questionId);
    // console.log(question[0].text);
    res.status (200).json ({
      message: 'Please Answer the question',
      question: question[0].text,
    });
  } catch (error) {
    res
      .status (500)
      .json ({message: 'Something went wrong', error: error.message});
  }
};

// verify secret question
let verifySecret = async (req, res) => {
  try {
    let {email, answer} = req.body;
    if (!email || !answer) {
      return res.status (400).json ({message: 'Email and answer are required'});
    }
    let isUserExist = await UserModel.findOne ({email});
    if (!isUserExist) {
      return res
        .status (400)
        .json ({message: 'User not found , please signup'});
    }
    // user found
    // needd to check the user answer and prviding answer
    let actualAnswer = isUserExist.answer;
    if (actualAnswer === answer) {
      // answer matched
      var token = jwt.sign (
        {
          userId: isUserExist._id,
        },
        process.env.JWT_SECRET_CODE,
        {expiresIn: '10m'}
      );
      res.status (200).json ({
        message: 'Answer correct, please reset your password within 10 minutes.',
        resetToken: token,
      });
    } else {
      // answer wrong
      let questionId = isUserExist.questionId;
      let question = allQuestions.filter (
        question => question.id === questionId
      );
      return res
        .status (401)
        .json ({message: 'Answer Wrong', question: question[0].text});
    }
  } catch (error) {
    res
      .status (500)
      .json ({message: 'Something went wrong', error: error.message});
  }
};

// reset password
let resetPassword = async (req, res) => {
  try {
    let {newPassword} = req.body;
    if (!newPassword) {
      return res
        .status (400)
        .json ({message: 'Please provide the new password'});
    }
    let userId = req.id;
    let user = await UserModel.findById (userId);
    if (!user) {
      return res.status (404).json ({message: 'User not found, please signup'});
    }
    bcrypt.hash (newPassword, saltRounds, async function (err, hash) {
      if (hash) {
        user.password = hash;
        await user.save ();
        res
          .status (201)
          .json ({message: 'Password Reset successfully', user: user});
      } else if (err) {
        res
          .status (500)
          .json ({message: 'Something went wrong :', Error: err.message});
      }
    });
  } catch (error) {
    res
      .status (500)
      .json ({message: 'Something went wrong', error: error.message});
  }
};

module.exports = {
  signUp,
  login,
  updateProfile,
  forgotPasswrord,
  verifySecret,
  resetPassword,
};
