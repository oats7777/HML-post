const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/HMK-post");
const Post = mongoose.model("Post", {
  PostsNum: String,
  posts: String,
  title: String,
  UserName: String,
  PW: String,
  date: { type: Date, default: Date.now },
  count: { type: Number, default: 0 }
});
app.set("view engine", "pug");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.render("index");
});
app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
