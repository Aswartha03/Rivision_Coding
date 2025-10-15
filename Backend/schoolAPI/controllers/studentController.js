// let studentSchema = new mongoose.Schema ({
//   name: {type: String, required: true},
//   email: {type: String, required: true, unique: true},
//   age: {type: Number, required: true},
//   classes: [{type: mongoose.Schema.Types.ObjectId, ref: 'CLASS'}],
// });
const classModel = require ('../models/classModel');
let studentModel = require ('../models/studentModel');
let addStudent = async (req, res) => {
  try {
    let {email, classes} = req.body;
    let student = await studentModel.findOne ({email});
    if (student) {
      return res
        .status (400)
        .json ({message: 'Student is Already Registered....'});
    }
    student = await studentModel.create (req.body);
    const studentId = student._id;
    if (classes) {
      const classIds = Array.isArray (classes) ? classes : [classes];
      const result = await classModel.updateMany (
        {_id: {$in: classIds}},
        {$addToSet: {students: studentId}}
      );
      if (result.matchedCount === 0) {
        return res.status (404).json ({message: 'No matching classes found'});
      }
    }
    res.status (201).json ({message: 'Student Created', student});
  } catch (error) {
    res.status (500).json ({message: error.message});
  }
};

let allStudents = async (req, res) => {
  try {
    let students = await studentModel
      .find ()
      .populate ('classes', 'name subject schedule');
    if (students.length == 0) {
      return res.status (404).json ({message: 'No Students Found'});
    }
    return res.status (200).json ({message: 'Students', students});
  } catch (error) {
    return res.status (500).json ({message: error.message});
  }
};

let updateStudentById = async (req, res) => {
  try {
    let studentId = req.params.id;
    let student = await studentModel.findById (studentId);
    if (!student) {
      return res
        .status (404)
        .json ({message: 'Student is not found to update'});
    }
    let newDetails = req.body 
    
  } catch (error) {
    return res.status (500).json ({message: error.message});
  }
};

let deleteStudentById = async (req, res) => {
  try {
    let studentId = req.params.id;
    let student = await studentModel.findById (studentId);
    if (!student) {
      return res
        .status (404)
        .json ({message: 'Student is not found to delete'});
    }
    await classModel.updateMany (
      {students: studentId},
      {$pull: {students: studentId}}
    );
    await studentModel.findByIdAndDelete (studentId);
    return res.status (200).json ({message: 'Student is Deleted...'});
  } catch (error) {
    return res.status (500).json ({message: error.message});
  }
};

module.exports = {
  addStudent,
  allStudents,
  updateStudentById,
  deleteStudentById,
};
