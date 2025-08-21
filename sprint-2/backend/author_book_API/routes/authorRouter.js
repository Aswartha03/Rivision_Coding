let express = require ('express');
let authorRouter = express.Router ();
let AuthorModel = require("../models/authorModel")

authorRouter.post ('/add', async (req, res) => {
  try {
    let author = req.body;
    let newAuthor = await AuthorModel.create (author);
    res.status (201).json ({message: 'Author Created', Author: newAuthor});
  } catch (error) {
    res.status (500).json ({message: error.message});
  }
});

module.exports = authorRouter;
