import React, { useState } from "react";
import { LiaSearchSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import axios from "axios";

const SearchToggle = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    try {
      const res = await axios.get(
        `https://ecommerce-website-blog.onrender.com/api/blogs/search?q=${query}`
      );
      setResults(res.data);
    } catch (err) {
      console.error("Search error:", err);
    }

    setQuery("");
    setIsOpen(false);
  };

  return (
    <div>
    <div className="flex flex-rows items-center mx-8 sm:mx-24 md:mx-37">
      {/* 🔹 Navbar Links */}
      <nav className="flex items-center gap-7 text-gray-700 font-medium">
        <Link
          to="/show"
          className="text-lg font-semibold text-gray-600 hover:text-indigo-700 transition-colors"
        >
          Show
        </Link>
        <Link
          to="/books"
          className="text-base text-gray-600 hover:text-indigo-600 transition-colors"
        >
          Books
        </Link>
      </nav>

      {/* 🔹 Search Icon */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex mx-7 items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full bg-gray-100 hover:bg-indigo-500 hover:text-white text-gray-700 text-xl md:text-2xl active:scale-95 transition-all duration-300"
        >
          <LiaSearchSolid />
        </button>
      )}

      {/* 🔹 Expanding Search Bar */}
      <form
        onSubmit={handleSubmit}
        className={`flex items-center ml-4 rounded-full border  border-gray-300 bg-white/90 backdrop-blur-sm transition-all duration-500 ease-in-out
          ${
            isOpen
              ? "w-[18rem] sm:w-[22rem] md:w-[38rem] opacity-100 px-3 sm:px-4 py-1.5 sm:py-2 ml-2 "
              : "w-0 opacity-0 overflow-hidden"
          }
        `}
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search blog titles or categories..."
className="flex-1 px-3 py-2 bg-transparent text-gray-800 placeholder-gray-400 text-sm sm:text-base border-b border-transparent focus:border-gray-600 focus:outline-none transition-colors duration-300"
          autoFocus
        />
        <button
          type="submit"
          className="px-4 sm:px-5 py-1.5 sm:py-2 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-medium rounded-full hover:from-indigo-600 hover:to-indigo-700 active:scale-95 transition-all duration-300 text-sm sm:text-base"
        >
          Go
        </button>
      </form>

      
    </div>
    {/* 🔹 Display Blog Search Results */}
      {results.length > 0 && (
        <div className="mt-4 w-full max-w-3xl bg-white mx-auto shadow-md rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3 text-gray-700">
            Blog Results:
          </h3>
          <ul className="space-y-3">
            {results.map((blog) => (
              <li
                key={blog._id}
                className="border-b border-gray-200 pb-2 hover:text-indigo-700 transition-colors"
              >
                <Link to={`/blogs/${blog._id}`}>
                  <h4 className="text-base font-medium text-gray-800">
                    {blog.title}
                  </h4>
                  <p className="text-sm text-gray-500">{blog.category}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
   </div>
  );
};

export default SearchToggle;
