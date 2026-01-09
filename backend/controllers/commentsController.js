import Comment from "../models/comments.js";
import Blog from "../models/blog.js";

// Get comments for a blog
export const getCommentsByBlog = async (req, res) => {
  try {
    const comments = await Comment.find({ blog: req.params.id }).sort({ createdAt: -1 });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add comment to blog
export const addComment = async (req, res) => {
  try {
    const { name, rating, comment } = req.body;
    const blogId = req.params.id;

    const blog = await Blog.findById(blogId);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    const newComment = new Comment({ name, rating, comment, blog: blogId });
    await newComment.save();

    res.status(201).json(newComment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
