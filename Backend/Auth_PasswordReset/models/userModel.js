let mongoose = require ('mongoose');

let userSchema = new mongoose.Schema ({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  resetToken: {type: String},
  resetTokenExpiry: {type: Date},
});

let userModel = mongoose.model ('USER', userSchema);
module.exports = userModel;
