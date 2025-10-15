let mongoose = require ('mongoose');

// Class Schema
// name: String, required, unique
// subject: String, required
// teacher: ObjectId referencing the Teacher model
// students: Array of ObjectIds referencing the Student model
// schedule: String (e.g., "Mon-Wed-Fri 10:00-11:00")

let classSchema = new mongoose.Schema ({
  name: {type: String, required: true, unique: true},
  subject: {type: String, required: true},
  teacher: {type: mongoose.Schema.Types.ObjectId, ref: 'TEACHER'},
  students: [{type: mongoose.Schema.Types.ObjectId, ref: 'STUDENT'}],
  schedule: {type: String},
});
let classModel = mongoose.model ('CLASS', classSchema);
module.exports = classModel;
