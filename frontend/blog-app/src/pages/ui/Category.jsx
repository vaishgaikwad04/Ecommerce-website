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
        const res = await axios.get(`http://localhost:5000/api/blogs/type/${type}`);
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

  if (loading) return <p className="text-center mt-10 text-lg font-medium">Loading...</p>;

  return (
    <div className="max-w-8xl  mt-10 px-4">
      <h1 className="text-4xl font-semibold mb-8 capitalize text-center mt-24 text-indigo-500 mb-20">{type} Blogs</h1>

      {blogs.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No blogs found in this category.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white  rounded-lg shadow hover:shadow-xl transition p-5 flex flex-col"
            >
              {blog.image && blog.image[0] && (
                <img
                  src={blog.image[0]}
                  alt={blog.title}
                  className="w-full h-140 object-cover rounded-md mb-4"
                />
              )}
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">{blog.title}</h2>
              <p className="text-gray-600 mb-4">{blog.content.slice(0, 120)}...</p>
              <Link
                to={`/blogs/${blog._id}`}
                className="mt-auto inline-block text-indigo-500 hover:text-indigo-600 font-medium"
              >
                Read more
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
