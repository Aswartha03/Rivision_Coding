let mongoose = require("mongoose") 
let bookSchema = new mongoose.Schema({
    name : {type:String,required:true},
    price:{type:Number} , 
    description : {type:String} , 
    createdBy : {type:mongoose.Schema.Types.ObjectId ,ref:"author"}
})
let BookModel = mongoose.model("book",bookSchema) 
module.exports = BookModel ;
