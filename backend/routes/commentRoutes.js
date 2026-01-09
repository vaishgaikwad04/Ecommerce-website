import express from "express";
import { getCommentsByBlog, addComment } from "../controllers/commentsController.js";

const router = express.Router({ mergeParams: true });

// Matches /api/blogs/:id/comments
router.get("/", getCommentsByBlog);   // get all comments for a blog
router.post("/", addComment);         // add new comment

export default router;
