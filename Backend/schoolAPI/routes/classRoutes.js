let express = require ('express');
const { addClass, allClasses } = require('../controllers/classController');

let classRouter = express.Router ();

classRouter.post("/add",addClass)
classRouter.get("/all",allClasses)
module.exports = classRouter;

