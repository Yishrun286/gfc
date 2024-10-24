const mongoose = require("mongoose");

// Define the Blog schema with comments as an array of commentSchema
const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    imgUrl: { type: String, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

// Create models
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
