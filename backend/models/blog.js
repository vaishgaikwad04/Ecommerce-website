import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    content: {
      type: String,
      required: [true, "Content is required"],
    },
    author: {
      type: String,
      default: "Anonymous",
    },
    type: {
      type: String,
      enum: ["Tech", "Travel", "Lifestyle", "Education", "Other"],
      default: "Other",
      required: true,
    },
    image: {
      type: [String], // multiple images
      default: [],    // always return an array
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
