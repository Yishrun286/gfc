const Blog = require("../models/blog.model.js")
const Comment = require("../models/comment.model.js")

const createPost = async (req, res) => {
  const { title, content, vidUrl, imgUrl, author } = req.body
  if (!title, !content, !author, !vidUrl && !umgUrl) {
    res.status(400).json({ message: "fill all form inputs" })
  }
  try {
    const blog = await Blog.create({
      title: title,
      content: content,
      vidUrl: vidUrl,
      imgUrl: imgUrl,
      author: author
    })
    res.status(200).json({ message: "blog created" })
  } catch (error) {
    res.status(500).json({ message: "Internal server error" })
  }
}

const createComment = async (req, res) => {
  const { name, text, blogId } = req.body
  if (!name, !text, !blogId) {
    res.status(400).json({ message: "fill all form inputs" })
  }
  try {
    const comment = await Comment.create({
      name: name,
      text: text,
      blogId: blogId,
    })
    res.status(200).json({ message: "thank you for your comment" })
  } catch (error) {
    res.status(500).json({ message: "Internal server error" })
  }
}

module.exports = { createPost, createComment }
