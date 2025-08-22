let express = require("express");
let secretQuestionRouter = express.Router()

let secretQuetions = require("../configs/questions.json")
let allQuestions = secretQuetions.questions 
secretQuestionRouter.get("/get",async(req,res)=>{
    try {
        res.status(200).json({message:"All Secret Questions",Questions:allQuestions})
    } catch (error) {
        res.status(500).json({Error:error.message})
    }
})


module.exports = secretQuestionRouter