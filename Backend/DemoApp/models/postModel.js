let mongoose = require ('mongoose');

let postSchama = new mongoose.Schema ({
  title: {type: String, required: true},
  content: {type: String, required: true},
  tags: [{type: String}],
  isPublished: {type: Boolean, default: false},
  author: {type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true},
});

let postModel = mongoose.model ('post', postSchama);
module.exports = postModel;
