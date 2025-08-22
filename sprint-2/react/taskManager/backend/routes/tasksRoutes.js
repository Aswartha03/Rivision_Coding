let express = require("express")
const { addTask } = require("../controllers/taskController")
let taskRouter = express.Router()

taskRouter.post("/addtask",addTask)


module.exports = taskRouter