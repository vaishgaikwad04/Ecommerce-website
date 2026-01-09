import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function LimitedBlogs({ limit = 4 }) {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("https://ecommerce-website-blog.onrender.com/api/blogs");
        // Sort by creation date descending and take only 'limit' blogs
        const latestBlogs = res.data
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, limit);
        setBlogs(latestBlogs);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch blogs");
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, [limit]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-lg animate-pulse text-pink-400">Loading blogs...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-lg text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="px-8 md:px-20 mx-20 py-16 bg-[#F9F6F2] min-h-screen">
      <h1 className="text-5xl py-4 font-bold text-[#0b3050] mb-12 tracking-wide">
        LATEST BLOGS
      </h1>

      {blogs.length === 0 ? (
        <p className="text-gray-500 text-center">No blogs available.</p>
      ) : (
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => {
            const mainImage = Array.isArray(blog.image)
              ? blog.image[0]
              : blog.image;

            return (
              <div
                key={blog._id}
                className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-lg transition"
              >
                {/* Image */}
                {mainImage ? (
                  <img
                    src={mainImage}
                    alt={blog.title}
                    className="w-full h-160 object-cover"
                  />
                ) : (
                  <div className="w-full h-64 flex items-center justify-center bg-gray-200 text-gray-500">
                    No Image
                  </div>
                )}

                {/* Content */}
                <div className="p-6 flex flex-col h-full">
                  <h2 className="text-2xl font-bold text-[#0b3050] mb-2">
                    {blog.title}
                  </h2>
                  <p className="text-gray-700 text-lg mb-4 line-clamp-4">
                    {blog.content}
                  </p>
                  <Link
                    to={`/blogs/${blog._id}`}
                    className="mt-auto text-pink-600 font-semibold hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
