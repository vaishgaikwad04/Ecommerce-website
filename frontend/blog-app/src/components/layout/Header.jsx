import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 shadow-md">
      <div className="max-w-8xl mx-24 px-6 md:px-12 py-4 flex justify-between items-center">
        {/* Left: Logo + Nav */}
        <div className="flex items-center space-x-12">
          <Link
            to="/"
            className="text-3xl md:text-4xl font-bold text-indigo-400 hover:text-indigo-400 transition-all"
          >
           BLOG
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 relative">
            {/* Blog Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <button className="font-medium text-lg md:text-2xl hover:text-indigo-400 transition">
                Blog ▾
              </button>

              {isOpen && (
                <div className="absolute left-0 mt-2 w-44 bg-white shadow-xl rounded-lg overflow-hidden border border-gray-100 animate-fade-in">
                  {["Tech", "Travel", "Lifestyle", "Education", "Other"].map(
                    (category) => (
                      <Link
                        key={category}
                        to={`/category/${category.toLowerCase()}`}
                        className="block px-5 py-2 text-xl text-gray-700 hover:bg-indigo-50 hover:text-indigo-500 transition-colors"
                      >
                        {category}
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>

            <Link
              to="/show"
              className="font-medium text-lg md:text-2xl hover:text-indigo-400 transition"
            >
              Show
            </Link>
            <Link
              to="/shop"
              className="font-medium text-lg md:text-2xl hover:text-indigo-400 transition"
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="font-medium text-lg md:text-2xl hover:text-indigo-400 transition"
            >
              About
            </Link>
          </nav>
        </div>

        {/* Right: Social Icons & Hamburger */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <div className="hidden md:flex space-x-5 text-gray-600 text-2xl md:text-2xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500 transition-transform transform hover:scale-110"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500 transition-transform transform hover:scale-110"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500 transition-transform transform hover:scale-110"
            >
              <FaInstagram />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl text-gray-700 hover:text-indigo-500 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200 animate-slide-down">
          <nav className="flex flex-col px-6 py-4 space-y-3">
            <Link
              to="/"
              className="font-medium text-lg hover:text-indigo-400 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <div className="relative">
              <button
                className="w-full text-left font-medium text-lg hover:text-indigo-400 transition"
                onClick={() => setIsOpen(!isOpen)}
              >
                Blog ▾
              </button>
              {isOpen && (
                <div className="mt-2 pl-4 flex flex-col space-y-2">
                  {["Tech", "Travel", "Lifestyle", "Education", "Other"].map(
                    (category) => (
                      <Link
                        key={category}
                        to={`/category/${category.toLowerCase()}`}
                        className="text-gray-700 hover:text-indigo-500 transition"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {category}
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>
            <Link
              to="/show"
              className="font-medium text-lg hover:text-indigo-400 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Show
            </Link>
            <Link
              to="/shop"
              className="font-medium text-lg hover:text-indigo-400 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="font-medium text-lg hover:text-indigo-400 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <div className="flex space-x-5 mt-4 text-gray-600 text-xl">
              <a href="#" className="hover:text-indigo-500 transition">F</a>
              <a href="#" className="hover:text-indigo-500 transition">T</a>
              <a href="#" className="hover:text-indigo-500 transition">I</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
