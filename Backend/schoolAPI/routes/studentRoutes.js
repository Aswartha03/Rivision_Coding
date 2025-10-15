let express = require ('express');
const {
  addStudent,
  allStudents,
  updateStudentById,
  deleteStudentById,
} = require ('../controllers/studentController');

let studentRouter = express.Router ();

studentRouter.post ('/add', addStudent);
studentRouter.get ('/all', allStudents);
studentRouter.patch ('/update/:id', updateStudentById);
studentRouter.delete ('/delete/:id', deleteStudentById);




module.exports = studentRouter;
