// src/pages/EditBlog.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditBlog() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [type, setType] = useState("Other");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false); // 👈 for button state
  const navigate = useNavigate();

  // Fetch blog by ID
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/blogs/${id}`);
        const blog = res.data;
        setTitle(blog.title);
        setContent(blog.content);
        setAuthor(blog.author);
        setType(blog.type);
        setImage(blog.image || "");
      } catch (err) {
        console.error(err);
        setError("Blog not found");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  // Update blog
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!title.trim() || !content.trim() || !author.trim()) {
      setError("Title, Content, and Author are required.");
      return;
    }

    try {
      setSubmitting(true);
      await axios.put(`http://localhost:5000/api/blogs/${id}`, {
        title,
        content,
        author,
        type,
        image,
      });

      alert("✅ Blog updated successfully!");
      navigate("/");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Update failed");
    } finally {
      setSubmitting(false);
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white">
        <p className="text-lg animate-pulse">Loading blog...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white">
      <div className="w-full max-w-lg bg-gray-800 p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">Edit Blog</h1>
        {error && <p className="text-red-400 mb-2">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 rounded bg-gray-700 focus:outline-none"
          />

          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-3 py-2 rounded bg-gray-700 focus:outline-none"
            rows={6}
          />

          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full px-3 py-2 rounded bg-gray-700 focus:outline-none"
          />

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full px-3 py-2 rounded bg-gray-700 focus:outline-none"
          >
            <option value="Tech">Tech</option>
            <option value="Travel">Travel</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Education">Education</option>
            <option value="Other">Other</option>
          </select>

          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full px-3 py-2 rounded bg-gray-700 focus:outline-none"
          />

          <button
            type="submit"
            disabled={submitting}
            className={`w-full py-2 rounded transition ${
              submitting
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-yellow-600 hover:bg-yellow-500"
            }`}
          >
            {submitting ? "Updating..." : "Update Blog"}
          </button>
        </form>
      </div>
    </div>
  );
}
