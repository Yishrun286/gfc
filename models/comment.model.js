const mongoose = require('mongoose');

// Define the Comment schema
const commentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  text: { type: String, required: true },
  date: { type: Date, default: Date.now },
  blogId: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog', required: true }
});


const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment
