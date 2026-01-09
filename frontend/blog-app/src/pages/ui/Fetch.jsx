import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Read() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("https://ecommerce-website-blog.onrender.com/api/blogs");
        setBlogs(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch blogs");
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-lg animate-pulse text-pink-400">Loading blogs...</p>
      </div>
    );
  }

  return (
    <div className="px-20 py-16 bg-[#F9F6F2] min-h-screen">
      {/* Heading */}
      <h1
        className="mb-10 text-left mx-8 mt-6 font-bold text-4xl tracking-wide"
        style={{ color: "var(--color-dark-blue)" }}
      >
        RECENT POSTS
      </h1>

     

      {/* Swiper */}
      <Swiper
        spaceBetween={40}
        slidesPerView={2} // ✅ one blog per row full width
        loop={true}
        autoplay={{ delay: 4000 }}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination, Navigation]}
        className="max-w-8xl  mx-auto w-full"
      >
        {blogs.length > 0 ? (
          blogs.map((blog) => {
            const mainImage = Array.isArray(blog.image)
              ? blog.image[0]
              : blog.image;

            return (
              <SwiperSlide key={blog._id}>
                <div className="flex bg-white rounded-3xl mt-10 shadow-md overflow-hidden w-full h-[450px]">
                  {/* Image */}
                  <div className="w-1/2 h-full">
                    {mainImage ? (
                      <img
                        src={mainImage}
                        alt={blog.title}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center bg-gray-200 text-gray-500">
                        No Image
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="w-1/2 p-10 flex flex-col">
                    <h2 className="text-2xl font-bold text-[#0b3050] mb-4 leading-snug">
                      {blog.title}
                    </h2>
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed line-clamp-6">
                      {blog.content}
                    </p>
                    <Link
                      to={`/blogs/${blog._id}`}
                      className="text-base font-semibold text-pink-600 hover:underline mt-auto"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            );
          })
        ) : (
          <p className="text-gray-500 text-center">No blogs available.</p>
        )}
      </Swiper>
    </div>
  );
}
