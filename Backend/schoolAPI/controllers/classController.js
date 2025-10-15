// let classSchema = new mongoose.Schema ({
//   name: {type: String, required: true, unique: true},
//   subject: {type: String, required: true},
//   teacher: {type: mongoose.Schema.Types.ObjectId, ref: 'TEACHER'},
//   students: [{type: mongoose.Schema.Types.ObjectId, ref: 'STUDENT'}],
//   schedule: {type: String},
// });

const classModel = require ('../models/classModel');
const teacherModel = require ('../models/teacherModel');

let addClass = async (req, res) => {
  try {
    let classDetails = req.body;
    let teacherID = classDetails.teacher;
    let teacher = await teacherModel.findById (teacherID);
    if (!teacher) {
      return res
        .status (400)
        .json ({message: 'Teacher Not Found to create a class'});
    }

    let newClass = await classModel.create (classDetails);
    teacher.classes = [...teacher.classes, newClass._id];
    await teacher.save ();
    console.log (teacher);
    return res.status (201).json ({message: 'Class Created', class: newClass});
  } catch (error) {
    return res.status (500).json ({message: error.message});
  }
};

let allClasses = async (req, res) => {
  try {
    let classes = await classModel
      .find ()
      .populate ('teacher' , "name email")
      .populate ('students',"name email");
    if (classes.length == 0) {
      return res.status (404).json ({message: 'No Classes are found'});
    }
    return res.status (200).json ({message: 'Classes', classes});
  } catch (error) {
    return res.status (500).json ({message: error.message});
  }
};
module.exports = {addClass , allClasses};
