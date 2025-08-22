let mongoose = require ('mongoose');
let userSchema = new mongoose.Schema ({
  name: {type: String, required: true, minlength: 3},
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Email Validation fails'],
  },
  password: {type: String, required: true, minlength: 6},
  questionId: {
    type: String,
    required: true,
    enum: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7'],
  },
  answer: {type: String, required: true},
});

let UserModel = mongoose.model ('user', userSchema);
module.exports = UserModel;
