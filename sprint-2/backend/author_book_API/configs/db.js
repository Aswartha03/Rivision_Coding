let mongoose = require ('mongoose');
let connectToDB = async () => {
  try {
    await mongoose.connect ('mongodb://127.0.0.1:27017/AuthorBookDB');
    console.log ('Connected to DB');
  } catch (error) {
    console.log (`Failed to connect DB :`, error.message);
  }
};

module.exports = connectToDB;
