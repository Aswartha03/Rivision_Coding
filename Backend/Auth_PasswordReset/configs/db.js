let mongoose = require("mongoose");
require("dotenv").config()
let connectToDb = async()=>{
    try {7
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to DB")
    } catch (error) {
        console.log("DB Connection Error :",error.message);
        
    }
}

module.exports = connectToDb