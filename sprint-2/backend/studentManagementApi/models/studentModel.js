let mongoose = require ('mongoose');
let studentSchema = new mongoose.Schema ({
  name: {type: String, required: true, minlength: 3},
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Email Validation fails'],
  },
  age: {type: Number, min: 18, required: true},
  course: {
    type: String,
    default: 'Web Development',
    enum: ['Web Development', 'Data Sceince', 'System Design'],
  },
});
let studentModel = mongoose.model ('student', studentSchema);
module.exports = studentModel;
// name
// email
// age
// course
