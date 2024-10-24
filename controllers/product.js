const Product = require("../models/Product.model.js");

const createProduct = async (req, res) => {
  const { title, description, imgUrl, price } = req.body;
  if ((!title, !description, !imgUrl, !price)) {
    res.status(400).json({ message: "fill all form inputs" });
  }
  try {
    const product = await Product.create({
      title: title,
      description: description,
      imgUrl: imgUrl,
      price: price,
    });
    res.status(200).json({ message: "product created" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = createProduct;
