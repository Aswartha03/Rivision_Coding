let mongoose = require ('mongoose');
let userSchema = new mongoose.Schema ({
  name: {type: String, required: true, minlength: 3},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true, minlength: 6},
  role: {type: String, enum: ['user', 'admin'], default: 'user'},
});

let UserModel = mongoose.model ('user', userSchema);
module.exports = UserModel;
