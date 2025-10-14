const postModel = require ('../models/postModel');

let addPost = async (req, res) => {
  try {
    let postData = req.body;
    let userId = req.userId;
    postData.author = userId;
    let newPost = await postModel.create (postData);
    return res.status (201).json ({message: 'post created', post: newPost});
  } catch (error) {
    return res.status (500).json ({message: error.message});
  }
};

module.exports = {addPost};
