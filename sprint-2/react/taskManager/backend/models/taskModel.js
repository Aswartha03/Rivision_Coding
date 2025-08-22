let mongoose = require ('mongoose');
let taskSchema = new mongoose.Schema ({
  taskName: {type: String, required: true},
  status: {type: Boolean, default: false},
});
let TaskModel = mongoose.model ('task', taskSchema);
module.exports = TaskModel;
