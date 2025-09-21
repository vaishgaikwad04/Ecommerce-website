import express from "express";
import {
  getBlogs,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
  getBlogsByType
} from "../controllers/blogController.js";

const router = express.Router();

router.get("/", getBlogs);        // GET all blogs
router.post("/", createBlog);     // POST create new blog
router.get("/:id", getBlogById);  // GET single blog
router.put("/:id", updateBlog);   // PUT update blog
router.delete("/:id", deleteBlog); // DELETE blog
router.get("/type/:type", getBlogsByType);  // ✅ GET blogs by type


export default router;
