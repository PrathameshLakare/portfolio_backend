const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    blogLink: { type: String, required: true },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
