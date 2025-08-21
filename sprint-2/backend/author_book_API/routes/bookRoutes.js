let express = require("express") 
const BookModel = require("../models/bookModel")
let bookRouter = express.Router()

bookRouter.post("/add/:id",async(req,res)=>{
    try {
        let book = req.body  
        let {id} = req.params 
        book.createdBy = id 
        let newBook = await BookModel.create(book)
        res.status(201).json({message:"Book Created" , book:newBook})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})


bookRouter.get("/get/:id",async(req,res)=>{
    try {
        let {id} = req.params 
        let books = await BookModel.find({createdBy:id}).populate("createdBy","name")
        res.status(201).json({message:"Books",books:books})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})


module.exports = bookRouter