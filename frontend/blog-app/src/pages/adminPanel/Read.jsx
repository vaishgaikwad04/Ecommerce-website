// src/pages/BlogList.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);

  // Fetch blogs
  const fetchBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/blogs");
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
        await axios.delete(`http://localhost:5000/api/blogs/${id}`);
        setBlogs(blogs.filter((blog) => blog._id !== id));
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">All Blogs (Admin View)</h1>
      <Link
        to="/create"
        className="inline-block mb-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded"
      >
        + Create Blog
      </Link>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-700 text-left">
          <thead className="bg-gray-800 text-gray-300">
            <tr>
              <th className="px-4 py-2 border border-gray-700">Image</th>
              <th className="px-4 py-2 border border-gray-700">Title</th>
              <th className="px-4 py-2 border border-gray-700">Author</th>
              <th className="px-4 py-2 border border-gray-700">Type</th>
              <th className="px-4 py-2 border border-gray-700">Content</th>
              <th className="px-4 py-2 border border-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.length > 0 ? (
              blogs.map((blog) => (
                <tr key={blog._id} className="hover:bg-gray-800">
                  <td className="px-4 py-2 border border-gray-700">
                    {blog.image && blog.image.length > 0 ? (
                      <div className="flex gap-2">
                        {blog.image.map((img, idx) => (
                          <img
                            key={idx}
                            src={img}
                            alt={`${blog.title} ${idx + 1}`}
                            className="h-12 w-20 object-cover rounded"
                          />
                        ))}
                      </div>
                    ) : (
                      "No Image"
                    )}
                  </td>
                  <td className="px-4 py-2 border border-gray-700">
                    {blog.title}
                  </td>
                  <td className="px-4 py-2 border border-gray-700">
                    {blog.author}
                  </td>
                  <td className="px-4 py-2 border border-gray-700">
                    {blog.type}
                  </td>
                  <td className="px-4 py-2 border border-gray-700 max-w-xs truncate">
                    {blog.content}
                  </td>
                  <td className="px-4 py-2 border border-gray-700 space-x-2">
                    <Link
                      to={`/edit/${blog._id}`}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-sm"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(blog._id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="text-center px-4 py-4 text-gray-400"
                >
                  No blogs found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
