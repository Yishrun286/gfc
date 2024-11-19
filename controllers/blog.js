const Blog = require("../models/blog.model.js")

const createPost = async (req, res) => {
  const { title, content, vidUrl, imgUrl, author } = req.body
  if (!title || !content || !author || !vidUrl && !imgUrl) {
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


module.exports = { createPost }
