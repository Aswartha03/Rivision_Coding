let mongoose = require("mongoose") 
let connectToDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to DB");
    } catch (error) {
        console.log("Failed to connect to DB");
    }
}


module.exports = connectToDb