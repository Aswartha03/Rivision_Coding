let mongoose = require ('mongoose');

let studentSchema = new mongoose.Schema ({
  name: {type: String, required: true, minlength: 3},
  email: {type: String, required: true, unique: true},
  age: {type: Number, required: true, min: 5},
  course: {
    type: String,
    required: true,
    enum: ['Web Development', 'Data Science', 'UI/UX'],
  },
});

let studentModel = mongoose.model ('student', studentSchema);
module.exports = studentModel;

// name → string, required, min length: 3
// email → string, required, unique, must be a valid email format
// age → number, required, must be greater than or equal to 5
// course → string, required, enum: "Web Development" | "Data Science" | "UI/UX"
