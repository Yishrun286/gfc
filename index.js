require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const app = express()
const apiRoute = require("./api.js")
const Blog = require("./models/blog.model.js")

const port = process.env.PORT || 8000

const dbConn = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("db connected")
  } catch (error) {
    console.log(error)
  }
}

dbConn()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
app.set("view engine", "ejs")
app.use("/api", apiRoute)

app.get("/", (req, res) => {
  res.render("index.ejs")
})

app.get("/about", (req, res) => {
  res.render("about.ejs")
})

app.get("/contact", (req, res) => {
  res.render("contact.ejs")
})

app.get("/teams", (req, res) => {
  res.render("teams.ejs")
})

app.get("/blog", async (req, res) => {
  const posts = await Blog.find()
  res.render("blog.ejs", { posts: posts })
})

app.get("/blog/:title", async (req, res) => {
  const title = req.params.title.replace(/-/g, ' ');
  const blog = await Blog.findOne({ title: title })
  if (blog) {
    res.render("blog-post.ejs", { blog: blog })
  } else {
    res.redirect("/blog")
  }
})

app.get("/blog-admin", (req, res) => {
  res.render("blog-admin.ejs")
})



app.listen(port, () => {
  console.log("Server is listening on port " + port)
})
