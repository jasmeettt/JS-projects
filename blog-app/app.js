const dotenv = require("dotenv");
const express = require("express");
const methodOverride = require("method-override");
const path = require("path");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [];

// Home Route - Show all blogs
app.get("/", (req, res) => {
  res.render("index", { posts });
});

// New Blog Form
app.get("/new", (req, res) => {
  res.render("new", { posts });
});

// Create Blog Post
app.post("/posts", (req, res) => {
  const { title, content } = req.body;
  const id = posts.length + 1;
  posts.push({ id, title, content });
  res.redirect("/");
});

// Show Single Blog Post
app.get("/posts/:id", (req, res) => {
  const post = posts.find((p) => p.id === Number(req.params.id));
  if (!post) return res.redirect("/");
  res.render("show", { post });
});

// Edit Blog Form
app.get("/posts/:id/edit", (req, res) => {
  const post = posts.find((p) => p.id === Number(req.params.id));
  if (!post) return res.redirect("/");
  res.render("edit", { post });
});

// Update Blog Post
app.put("/posts/:id", (req, res) => {
  const post = posts.find((p) => p.id === Number(req.params.id));
  if (!post) return res.redirect("/");
  post.title = req.body.title;
  post.content = req.body.content;
  res.redirect(`/posts/${Number(req.params.id)}`);
});

// Delete Blog Post
app.delete("/posts/:id", (req, res) => {
  posts = posts.filter((p) => p.id !== Number(req.params.id));
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Server is running on port: http://localhost:${PORT}`);
});
