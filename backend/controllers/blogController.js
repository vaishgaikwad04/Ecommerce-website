import Blog from "../models/blog.js";

// @desc    Get all blogs
export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a blog
export const createBlog = async (req, res) => {
  const { title, content, author, type, image } = req.body;

  try {
    // Ensure "image" is always an array
    const images = Array.isArray(image) ? image : [image].filter(Boolean);

    const blog = await Blog.create({ title, content, author, type, image: images });
    res.status(201).json(blog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Get single blog
export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update a blog
export const updateBlog = async (req, res) => {
  try {
    let updateData = req.body;

    // Make sure images are always saved as an array
    if (updateData.image) {
      updateData.image = Array.isArray(updateData.image)
        ? updateData.image
        : [updateData.image].filter(Boolean);
    }

    const blog = await Blog.findByIdAndUpdate(req.params.id, updateData, { new: true });
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    res.json(blog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Delete a blog
export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get blogs by type (case-insensitive)
export const getBlogsByType = async (req, res) => {
  const { type } = req.params;

  try {
    const blogs = await Blog.find({
      type: { $regex: new RegExp(`^${type}$`, "i") },
    });

    if (!blogs.length) return res.status(404).json({ message: "No blogs found" });

    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔍 Search Blogs Controller (fixed)
export const searchBlogs = async (req, res) => {
  try {
    const query = req.query.q;

    if (!query || query.trim() === "") {
      return res.status(400).json({ message: "Search query is required" });
    }

    // Search by title, type, or content
    const blogs = await Blog.find({
      $or: [
        { title: { $regex: query, $options: "i" } },
        { type: { $regex: query, $options: "i" } },  // ✅ replaced category with type
        { content: { $regex: query, $options: "i" } },
      ],
    });

    if (blogs.length === 0) {
      return res.status(404).json({ message: "No blogs found" });
    }

    res.status(200).json(blogs);
  } catch (error) {
    console.error("Search error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

