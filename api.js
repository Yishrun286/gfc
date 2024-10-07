const { Router } = require("express")
const { createPost, createComment } = require("./controllers/blog.js")

const router = Router()

router.post("/", createPost)
router.post("/comment", createComment)

module.exports = router
