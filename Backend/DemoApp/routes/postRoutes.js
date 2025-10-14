let express  = require("express")
const { addPost } = require("../controllers/postController")
const roleCheckMiddleware = require("../middlewares/roleCheckMW")

let postRouter = express.Router()
// add new post
postRouter.post("/add",roleCheckMiddleware,addPost)

module.exports = postRouter