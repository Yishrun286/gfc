const { Router } = require("express");
const { createPost, createComment } = require("./controllers/blog.js");
const createProduct = require("./controllers/product.js");

const router = Router();

router.post("/", createPost);
router.post("/shop", createProduct);
router.post("/comment", createComment);

module.exports = router;
