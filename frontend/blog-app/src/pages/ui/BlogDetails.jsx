import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [comments, setComments] = useState([]);
  const [form, setForm] = useState({ name: "", rating: 5, comment: "" });

  // Fetch blog details
  useEffect(() => {
    fetch(`/api/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data))
      .catch((err) => console.error("Error fetching blog:", err));
  }, [id]);

  // Fetch comments for this blog
  useEffect(() => {
    fetch(`/api/blogs/${id}/comments`)
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((err) => console.error("Error fetching comments:", err));
  }, [id]);

  if (!blog) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 animate-pulse text-lg">Loading blog...</p>
      </div>
    );
  }

  const images = Array.isArray(blog.image) ? blog.image : [blog.image];

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/blogs/${id}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        const newComment = await res.json();
        setComments([...comments, newComment]);
        setForm({ name: "", rating: 5, comment: "" });
      } else {
        console.error("Failed to submit comment");
      }
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  return (
    <div className="bg-[#fdf8f5] min-h-screen">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-8 md:px-20 py-12">
        <div>
          <h1
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight"
            style={{ color: "var(--color-dark-blue)" }}
          >
            {blog.title}
          </h1>
          <p className="text-gray-500 text-sm md:text-base mb-4">
            Published on {new Date(blog.createdAt).toLocaleDateString()}
          </p>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            {blog.description || blog.content.slice(0, 200) + "..."}
          </p>
        </div>

        {images[0] && (
          <div>
            <img
              src={images[0]}
              alt={blog.title}
              className="w-full h-[450px] md:h-[500px] object-cover rounded-xl shadow-md"
            />
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto mt-12 pb-16 px-4">
        <article className="prose prose-lg md:prose-xl text-gray-700 text-left">
          <div
            dangerouslySetInnerHTML={{ __html: blog.content }}
            className="space-y-6 text-left"
          ></div>
        </article>

        {/* Extra Images */}
        {images.length > 1 && (
          <div className="mt-10">
            <div
              className={`grid gap-6 ${
                images.length === 2
                  ? "md:grid-cols-2"
                  : images.length === 3
                  ? "md:grid-cols-3"
                  : "sm:grid-cols-2 md:grid-cols-3"
              }`}
            >
              {images.slice(1).map((img, idx) => (
                <div
                  key={idx}
                  className="flex justify-center items-center overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform"
                >
                  <img
                    src={img}
                    alt={`${blog.title} - image ${idx + 2}`}
                    className="w-full h-[300px] object-cover rounded-xl"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Reviews Section */}
        <div className="mt-16 border-t pt-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Reviews</h2>

          {/* Review Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl shadow-md mb-6"
          >
            <input
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border p-3 rounded mb-3"
              required
            />
            <select
              value={form.rating}
              onChange={(e) =>
                setForm({ ...form, rating: Number(e.target.value) })
              }
              className="w-full border p-3 rounded mb-3"
            >
              {[5, 4, 3, 2, 1].map((r) => (
                <option key={r} value={r}>
                  {r} Stars
                </option>
              ))}
            </select>
            <textarea
              placeholder="Write your review..."
              value={form.comment}
              onChange={(e) => setForm({ ...form, comment: e.target.value })}
              className="w-full border p-3 rounded mb-3"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-pink-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-pink-600 transition"
            >
              Submit Review
            </button>
          </form>

          {/* Display Reviews */}
          <div className="space-y-6">
            {comments.length > 0 ? (
              comments.map((review, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
                >
                  <p className="font-semibold text-lg text-gray-900 mb-2">
                    {review.name}
                  </p>
                  <p className="text-yellow-500 mb-3 text-sm tracking-wide">
                    {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {review.comment}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 italic text-center">
                No reviews yet. Be the first!
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="mt-12 px-8 md:px-20 mb-12">
        <Link
          to="/"
          className="inline-block text-pink-500 font-semibold px-6 py-3 rounded-lg shadow-md hover:underline transition"
        >
          ← Back to Blogs
        </Link>
      </div>
    </div>
  );
}
