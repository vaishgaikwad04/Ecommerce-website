import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/blogs/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch blog");
        return res.json();
      })
      .then((data) => setBlog(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!blog) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 animate-pulse text-lg">Loading blog...</p>
      </div>
    );
  }

  const images = Array.isArray(blog.image) ? blog.image : [blog.image];

  return (
    <div className="bg-[#fdf8f5] min-h-screen">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6 py-12">
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
      <div className="max-w-5xl mx-70 mt-12 pb-16">
        <article className="prose prose-lg md:prose-xl text-gray-700">
          {/* If your content has headings, line breaks, or lists, you can render HTML safely */}
          <div
            dangerouslySetInnerHTML={{ __html: blog.content }}
            className="space-y-6"
          ></div>
        </article>

        {/* Extra Images */}
        {images.length > 1 && (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {images.slice(1).map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${blog.title} - extra ${idx + 1}`}
                className="w-full h-[300px] object-cover rounded-xl shadow-lg hover:scale-105 transition-transform"
              />
            ))}
          </div>
        )}

        {/* Reviews Section */}
        <div className="mt-16 border-t pt-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Reviews
          </h2>

          {/* Sample reviews */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <p className="font-semibold text-gray-800">John Doe</p>
              <p className="text-yellow-500 mb-2">★★★★★</p>
              <p className="text-gray-700">
                Amazing blog! Very informative and well-written.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <p className="font-semibold text-gray-800">Jane Smith</p>
              <p className="text-yellow-500 mb-2">★★★★☆</p>
              <p className="text-gray-700">
                Great read, I learned a lot. Would love to see more examples.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="mt-12 px-6 mb-12">
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
