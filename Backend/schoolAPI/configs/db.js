let mongoose = require ('mongoose');

require ('dotenv').config (); 
let mongo_uri = process.env.MONGO_URI

let connectToDb = async () => {
  try {
    await mongoose.connect (mongo_uri);
    console.log ('Connected to DB');
  } catch (error) {
    console.log ('Database connection failed:', error.message);
  }
};

module.exports = connectToDb;
