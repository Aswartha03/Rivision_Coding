const TaskModel = require("../models/taskModel")

let addTask  = async(req,res)=>{
    try {
        let details = req.body 
        let newTask = await TaskModel.create(details)
        res.status(201).json({message:"Task Added"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}



module.exports = {addTask}