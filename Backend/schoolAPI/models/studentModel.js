let mongoose = require ('mongoose');


let studentSchema = new mongoose.Schema ({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  age: {type: Number, required: true},
  classes: [{type: mongoose.Schema.Types.ObjectId, ref: 'CLASS'}],
});
let studentModel = mongoose.model ('STUDENT', studentSchema);
module.exports = studentModel;
