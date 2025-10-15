let express = require("express")
const { addTeacher, allTeachers, updateTeacher, deleteTeacher } = require("../controllers/teacherController")

let teacherRouter = express.Router()

teacherRouter.post("/add",addTeacher)
teacherRouter.get("/all",allTeachers)
teacherRouter.patch("/update/:id",updateTeacher)
teacherRouter.delete("/delete/:id",deleteTeacher)

module.exports = teacherRouter 