let mongoose = require ('mongoose');

let userSchema = new mongoose.Schema ({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true, lowercase: true},
  password: {type: String, required: true},
  role: {type: String, enum: ['writer', 'admin'], default: 'writer'},
});

let userModel = mongoose.model ('user', userSchema);
module.exports = userModel;
