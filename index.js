require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const apiRoute = require("./api.js");
const Blog = require("./models/blog.model.js");
const Product = require("./models/product.model.js");
const port = process.env.PORT || 8000;

const dbConn = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("db connected");
  } catch (error) {
    console.log(error);
  }
};

dbConn();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use("/api", apiRoute);

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/faq", (req, res) => {
  res.render("faq.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.get("/teams", (req, res) => {
  res.render("teams.ejs");
});

app.get("/blog", async (req, res) => {
  const posts = await Blog.find();
  res.render("blog.ejs", { posts: posts });
});

app.get("/blog/:title", async (req, res) => {
  const title = req.params.title.replace(/-/g, " ");
  const blog = await Blog.findOne({ title: title });
  if (blog) {
    res.render("blog-post.ejs", { blog: blog });
  } else {
    res.redirect("/blog");
  }
});

app.get("/blog-admin", (req, res) => {
  res.render("blog-admin.ejs");
});

app.get("/shop", async(req, res) => {
  try{
  const products=await Product.find()
  res.render("shop.ejs",{products:products});
  }catch(error){
    //TODO create an error page
    res.send("cannot retrieve list of products")
  }
});

app.get("/shop-admin", (req, res) => {
  res.render("shop-admin.ejs");
});

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ products: products });
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
  }
});

app.listen(port, () => {
  console.log("Server is listening on port " + port);
});
