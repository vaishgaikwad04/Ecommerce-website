import React, { useState } from "react";
import { LiaSearchSolid } from "react-icons/lia";
import { IoClose } from "react-icons/io5";
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
        `https://ecommerce-website-blog.onrender.com//api/blogs/search?q=${query}`
      );
      setResults(res.data);
    } catch (err) {
      console.error("Search error:", err);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setQuery("");
    setResults([]);
  };

  return (
    <div>
      {/* ================= NAV + SEARCH ================= */}
      <div className="flex items-center mx-8 sm:mx-37">
        {/* Navbar Links */}
        <nav className="flex items-center gap-7 text-gray-700 font-medium">
          <Link
            to="/show"
            className="text-lg font-semibold text-gray-600 hover:text-indigo-700 transition"
          >
            Show
          </Link>
          <Link
            to="https://www.amazon.com/Skinny-Confidentials-Get-Out-Sun/dp/1419747878?crid=L44PWHZAR5SZ&keywords=the+skinny+confidential+book&qid=1694462666&sprefix=The+Skinny+Confiden,aps,331&sr=8-1&linkCode=sl1&tag=theskinconf-20&linkId=14d0ac8cb8e63c84da2e5f7e468ec1f2&language=en_US&ref_=as_li_ss_tl"
            className="text-base text-gray-600 hover:text-indigo-600 transition"
          >
            Books
          </Link>
        </nav>

        {/* Search Icon */}
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="mx-6 flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-indigo-500 hover:text-white transition"
          >
            <LiaSearchSolid className="text-xl" />
          </button>
        )}

        {/* Search Bar */}
        <form
          onSubmit={handleSubmit}
          className={`flex items-center rounded-full border border-gray-300 bg-white transition-all duration-500 ease-in-out
            ${
              isOpen
                ? "w-[18rem] sm:w-[22rem] md:w-[38rem] opacity-100 px-3 py-1.5 ml-2"
                : "w-0 opacity-0 overflow-hidden"
            }
          `}
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search blog titles or categories..."
            className="flex-1 px-3 py-2 bg-transparent text-gray-800 placeholder-gray-400 text-sm sm:text-base focus:outline-none"
            autoFocus
          />

          {/* CUT BUTTON */}
          <button
            type="button"
            onClick={handleClose}
            className="mx-1 text-gray-500 hover:text-red-500 transition"
          >
            <IoClose size={20} />
          </button>

          <button
            type="submit"
            className="px-4 py-1.5 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition text-sm"
          >
            Go
          </button>
        </form>
      </div>

      {/* ================= SEARCH RESULTS ================= */}
      {results.length > 0 && (
        <div className="mt-4 w-full max-w-3xl bg-white mx-auto shadow-md rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3 text-gray-700">
            Blog Results
          </h3>

          <ul className="space-y-3">
            {results.map((blog) => (
              <li
                key={blog._id}
                className="border-b pb-2 hover:text-indigo-700 transition"
              >
                <Link to={`/blogs/${blog._id}`}>
                  <h4 className="font-medium text-gray-800">
                    {blog.title}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {blog.category}
                  </p>
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
