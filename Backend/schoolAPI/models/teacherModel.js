let mongoose = require ('mongoose');

let teacherSchema = new mongoose.Schema ({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  subjects: [{type: String}],
  classes: [{type: mongoose.Schema.Types.ObjectId, ref: 'CLASS'}],
});
let teacherModel = mongoose.model ('TEACHER', teacherSchema);
module.exports = teacherModel;
