const express = require('express');
const router = express.Router();

const blogs = [];

// Get all blogs
router.get('/', (req, res) => {
  res.json(blogs);
});

// Create a new blog
router.post('/', (req, res) => {
  const { authorId, title, content } = req.body;
  // Validate authorId as an integer
  if (!Number.isInteger(parseInt(authorId))) {
    return res.status(400).json({ message: 'Author ID must be an integer' });
  }
  blogs.push({ authorId, title, content });
  res.status(201).json({ message: 'Blog created' });
});

// Get blog by author ID
router.get('/:authorId', (req, res) => {
  const authorId = parseInt(req.params.authorId);
  // Validate authorId as an integer
  if (!Number.isInteger(authorId)) {
    return res.status(400).json({ message: 'Author ID must be an integer' });
  }
  const authorBlogs = blogs.filter(blog => blog.authorId === authorId);
  res.json(authorBlogs);
});

module.exports = router;