const mongoose = require('mongoose');

// Define the Blog schema with comments as an array of commentSchema
const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  vidUrl: { type: String, required: true },
  imgUrl: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

// Create models
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog
