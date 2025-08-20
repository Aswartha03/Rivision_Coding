let express = require ('express');
const studentModel = require ('../models/studentModel');
let studentRouter = express.Router ();

studentRouter.get ('/get', async (req, res) => {
  try {
    let allStudents = await studentModel.find ();
    if (allStudents.length == 0) {
      return res.status (401).json ({message: 'No Students are found...'});
    }
    res.status (200).json ({message: 'Students', allStudents});
  } catch (error) {
    res.status (500).json ({message: error.message});
  }
});

studentRouter.post ('/post', async (req, res) => {
  try {
    let {email, name, age, course} = req.body;
    if (!email || !name || !age || !course) {
      return res
        .status (402)
        .json ({message: 'Please provide all the required feilds'});
    }
    let isStudentAlreadyExist = await studentModel.findOne ({email: email});
    if (isStudentAlreadyExist) {
      return res.status (400).json ({message: 'Student is already exist..'});
    }
    let newStudent = await studentModel.create (req.body);
    res.status (201).json ({message: 'Student Added', student: newStudent});
  } catch (error) {
    res.status (500).json ({message: error.message});
  }
});

studentRouter.get ('/get/:id', async (req, res) => {
  try {
    let {id} = req.params;
    let student = await studentModel.findById (id);
    if (!student) {
      return res.status (404).json ({message: 'Student is not found'});
    }
    res.status (200).json ({message: 'Student Found', student});
  } catch (error) {
    res.status (500).json ({message: error.message});
  }
});

module.exports = studentRouter;
