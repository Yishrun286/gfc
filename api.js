const { Router } = require("express");
const { createPost } = require("./controllers/blog.js");
const createProduct = require("./controllers/product.js");

const router = Router();

router.post("/", createPost);
router.post("/shop", createProduct);

module.exports = router;
