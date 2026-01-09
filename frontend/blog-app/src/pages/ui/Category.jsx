import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function CategoryPage() {
  const { type } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(
          `https://ecommerce-website-blog.onrender.com/api/blogs/type/${type}`
        );
        setBlogs(res.data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [type]);

  if (loading)
    return (
      <p className="text-center mt-16 text-lg font-medium">Loading...</p>
    );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-semibold text-center capitalize text-indigo-500 mb-10">
        {type} Blogs
      </h1>

      {blogs.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No blogs found in this category.
        </p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col overflow-hidden"
            >
              {blog.image?.[0] && (
                <img
                  src={blog.image[0]}
                  alt={blog.title}
                  className="w-full h-56 object-cover"
                />
              )}

              <div className="p-5 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {blog.title}
                </h2>

                <p className="text-gray-600 text-sm mb-4">
                  {blog.content.slice(0, 120)}...
                </p>

                <Link
                  to={`/blogs/${blog._id}`}
                  className="mt-auto text-indigo-500 font-medium hover:underline"
                >
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
