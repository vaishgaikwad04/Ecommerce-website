import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [type, setType] = useState("Other");
  const [images, setImages] = useState([""]); // array for multiple image URLs
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle updating a specific image field
  const handleImageChange = (index, value) => {
    const newImages = [...images];
    newImages[index] = value;
    setImages(newImages);
  };

  // Add a new input field
  const addImageField = () => {
    setImages([...images, ""]);
  };

  // Remove an image field
  const removeImageField = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("https://ecommerce-website-blog.onrender.com//api/blogs", {
        title,
        content,
        author,
        type,
        image: images, // send as array
      });

      console.log("Blog created:", res.data);
      navigate("/"); // redirect after success
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white">
      <div className="w-full max-w-lg bg-gray-800 p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">Create Blog</h1>
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
            className="w-full py-2 bg-indigo-600 rounded hover:bg-indigo-500 transition"
          >
            Create Blog
          </button>
        </form>
      </div>
    </div>
  );
}
