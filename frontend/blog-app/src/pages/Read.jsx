// src/pages/BlogList.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);

  // Fetch blogs
  const fetchBlogs = async () => {
    try {
      const res = await axios.get("https://ecommerce-website-blog.onrender.com/api/blogs");
      setBlogs(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Delete blog
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        await axios.delete(`https://ecommerce-website-blog.onrender.com/api/blogs/${id}`);
        // Refresh list after deletion
        setBlogs(blogs.filter((blog) => blog._id !== id));
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">All Blogs</h1>
      <Link to="/create" className="underline mb-4 block">
        + Create Blog
      </Link>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div key={blog._id} className="bg-gray-800 p-4 rounded relative">
            {blog.image && (
              <img
                src={blog.image}
                alt={blog.title}
                className="h-40 w-full object-cover rounded mb-2"
              />
            )}
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p className="text-sm text-gray-400">By {blog.author}</p>
            <p className="mt-2 line-clamp-3">{blog.content}</p>

            {/* Delete Button */}
            <button
              onClick={() => handleDelete(blog._id)}
              className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white text-sm px-2 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
