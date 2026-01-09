import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const API = "https://ecommerce-website-blog.onrender.com";

export default function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [comments, setComments] = useState([]);
  const [form, setForm] = useState({ name: "", rating: 5, comment: "" });

  useEffect(() => {
    fetch(`${API}/api/blogs/${id}`)
      .then((res) => res.json())
      .then(setBlog)
      .catch(console.error);
  }, [id]);

  useEffect(() => {
    fetch(`${API}/api/blogs/${id}/comments`)
      .then((res) => res.json())
      .then(setComments)
      .catch(console.error);
  }, [id]);

  if (!blog) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 animate-pulse text-lg">Loading blog...</p>
      </div>
    );
  }

  const images = Array.isArray(blog.image) ? blog.image : [blog.image];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API}/api/blogs/${id}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      const newComment = await res.json();
      setComments((prev) => [...prev, newComment]);
      setForm({ name: "", rating: 5, comment: "" });
    }
  };

  return (
    <div className="bg-[#fdf8f5] min-h-screen">
      {/* HERO */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6 md:px-16 py-16">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{  color: "var(--color-dark-blue)" }}>
            {blog.title}
          </h1>
          <p className="text-gray-400 text-sm mb-6">
            Published on {new Date(blog.createdAt).toLocaleDateString()}
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            {blog.description || blog.content.slice(0, 200) + "..."}
          </p>
        </div>

        {images[0] && (
          <img
            src={images[0]}
            alt={blog.title}
            className="w-full h-[420px] object-cover rounded-2xl shadow-lg"
          />
        )}
      </div>

      {/* CONTENT */}
      <div className="max-w-[720px] mx-85 px-4 pb-20">
        <article className="prose prose-lg prose-gray">
          <div
            dangerouslySetInnerHTML={{ __html: blog.content }}
            className="leading-relaxed space-y-6 text-gray-700"
          />
        </article>

        <hr className="my-14 border-gray-200" />

        {/* EXTRA IMAGES */}
        {images.length > 1 && (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {images.slice(1).map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className="h-[260px] w-full object-cover rounded-xl shadow-md hover:scale-105 transition"
              />
            ))}
          </div>
        )}

        {/* REVIEWS */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6">Reviews</h2>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl shadow mb-10"
          >
            <input
              placeholder="Your name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              className="w-full border rounded p-3 mb-3"
              required
            />
            <textarea
              placeholder="Write your review..."
              value={form.comment}
              onChange={(e) =>
                setForm({ ...form, comment: e.target.value })
              }
              className="w-full border rounded p-3 mb-3"
              required
            />
            <button className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600">
              Submit Review
            </button>
          </form>

          {comments.length ? (
            comments.map((r, i) => (
              <div
                key={i}
                className="bg-white p-5 mb-4 rounded-xl shadow"
              >
                <p className="font-semibold">{r.name}</p>
                <p className="text-yellow-500 text-sm">
                  {"★".repeat(r.rating)}
                </p>
                <p className="text-gray-700 mt-2">
                  {r.comment}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-400 italic text-center">
              No reviews yet
            </p>
          )}
        </section>

        {/* BACK */}
        <div className="mt-16 text-left">
          <Link
            to="/"
            className="text-pink-500 font-semibold hover:underline"
          >
            ← Back to Blogs
          </Link>
        </div>
      </div>
    </div>
  );
}
