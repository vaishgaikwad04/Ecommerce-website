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
  const [images, setImages] = useState([""]); // Multiple image URLs
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  // ✅ Fetch existing blog data by ID
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`https://ecommerce-website-blog.onrender.com/api/blogs/${id}`);
        const blog = res.data;

        setTitle(blog.title);
        setContent(blog.content);
        setAuthor(blog.author);
        setType(blog.type);

        // If images exist as an array or single string
        if (Array.isArray(blog.image)) {
          setImages(blog.image);
        } else if (typeof blog.image === "string" && blog.image.trim() !== "") {
          setImages([blog.image]);
        } else {
          setImages([""]);
        }
      } catch (err) {
        console.error(err);
        setError("Blog not found");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  // ✅ Handle image field updates
  const handleImageChange = (index, value) => {
    const newImages = [...images];
    newImages[index] = value;
    setImages(newImages);
  };

  // ✅ Add new image field
  const addImageField = () => {
    setImages([...images, ""]);
  };

  // ✅ Remove image field
  const removeImageField = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  // ✅ Update blog
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!title.trim() || !content.trim() || !author.trim()) {
      setError("Title, Content, and Author are required.");
      return;
    }

    try {
      setSubmitting(true);
      await axios.put(`https://ecommerce-website-blog.onrender.com/api/blogs/${id}`, {
        title,
        content,
        author,
        type,
        image: images, // send as array
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

  // ✅ Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white">
        <p className="text-lg animate-pulse">Loading blog...</p>
      </div>
    );
  }

  // ✅ Main Form
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white">
      <div className="w-full max-w-lg bg-gray-800 p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">Edit Blog</h1>
        {error && <p className="text-red-400 mb-2">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 rounded bg-gray-700 focus:outline-none"
          />

          {/* Content */}
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-3 py-2 rounded bg-gray-700 focus:outline-none"
            rows={6}
          />

          {/* Author */}
          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full px-3 py-2 rounded bg-gray-700 focus:outline-none"
          />

          {/* Type */}
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

          {/* Multiple Image URLs */}
          <div className="space-y-2">
            {images.map((img, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder={`Image URL ${index + 1}`}
                  value={img}
                  onChange={(e) => handleImageChange(index, e.target.value)}
                  className="w-full px-3 py-2 rounded bg-gray-700 focus:outline-none"
                />
                {images.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeImageField(index)}
                    className="px-2 py-1 bg-red-500 rounded hover:bg-red-400"
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}

            <button
              type="button"
              onClick={addImageField}
              className="px-3 py-1 mt-2 bg-gray-600 rounded hover:bg-gray-500"
            >
              + Add another image
            </button>
          </div>

          {/* Submit */}
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
