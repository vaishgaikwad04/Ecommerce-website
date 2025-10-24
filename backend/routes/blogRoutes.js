import express from "express";
import {
  getBlogs,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
  getBlogsByType,
  searchBlogs,
} from "../controllers/blogController.js";

const router = express.Router();

// ✅ Specific routes FIRST
router.get("/search", searchBlogs);
router.get("/type/:type", getBlogsByType);

// ✅ Generic routes AFTER
router.get("/", getBlogs);
router.post("/", createBlog);
router.get("/:id", getBlogById);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

export default router;
