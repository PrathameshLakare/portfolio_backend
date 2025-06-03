require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const { initializeDatabase } = require("./db/db.connect");
const Project = require("./models/project.model");
const Blog = require("./models/blog.model");

app.use(express.json());
app.use(cors({ origin: process.env.FRONTEND_URL }));

initializeDatabase();

app.post("/project", async (req, res) => {
  try {
    const newProject = new Project(req.body);
    const savedProject = await newProject.save();

    res.status(201).json({ project: savedProject });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/project", async (req, res) => {
  try {
    const projects = await Project.find();

    res.status(200).json({ projects });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

app.post("/blog", async (req, res) => {
  try {
    const newBlog = new Blog(req.body);
    const savedBlog = await newBlog.save();

    res.status(201).json({ blog: savedBlog });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/blog", async (req, res) => {
  try {
    const blogs = await Blog.find();

    res.status(200).json({ blogs });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(3000, () => {
  console.log("server is listening on 3000");
});
