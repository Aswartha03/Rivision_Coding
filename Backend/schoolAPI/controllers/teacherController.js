// let teacherSchema = new mongoose.Schema ({
//   name: {type: String, required: true},
//   email: {type: String, required: true, unique: true},
//   subjects: [{type: String}],
//   classes: [{type: mongoose.Schema.Types.ObjectId, ref: 'CLASS'}],
// });

const teacherModel = require("../models/teacherModel");


let addTeacher = async (req, res) => {
  try {
    let {email} = req.body 
    let teacher = await teacherModel.findOne({email})
    if(teacher){
        return res.status(400).json({message:"Teacher is already Created"})
    }
    teacher = await teacherModel.create(req.body)
    return res.status(201).json({message:"Teacher Created",teacher})
  } catch (error) {
    return res.status(500).json({message:error.message})
  }
};



let allTeachers = async (req, res) => {
  try {
    let teachers = await teacherModel.find().populate("classes" ,"name subject schedule")
    if(teachers.length==0){
      return res.status(404).json({message:"No Teachers found"})
    }
    return res.status(200).json({message:"Teachers",teachers})
  } catch (error) {
     return res.status(500).json({message:error.message})
  }
};

let updateTeacher = async (req, res) => {
  try {
  } catch (error) {
     return res.status(500).json({message:error.message})
  }
};
let deleteTeacher = async (req, res) => {
  try {
  } catch (error) {
     return res.status(500).json({message:error.message})
  }
};

module.exports = {addTeacher, allTeachers, updateTeacher, deleteTeacher};
