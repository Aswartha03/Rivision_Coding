let mongoose = require ('mongoose');
let authorSchema = new mongoose.Schema ({
  name: {type: String, required: true},
  age: {type: Number},
  gender: {type: String, enum: ['Male', 'Female']},
});
let AuthorModel = mongoose.model ('author', authorSchema);
module.exports = AuthorModel;
