// Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import SearchToggle from "../Search copy";

export default function Header() {
  const [desktopBlogOpen, setDesktopBlogOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileBlogOpen, setMobileBlogOpen] = useState(false);

  const categories = ["Tech", "Travel", "Lifestyle", "Education", "Other"];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 shadow-md">
      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}

      <div className="max-w-8xl mx-25 px-6 md:px-12 py-4 flex justify-between items-center relative z-50">
        {/* Left: Logo + Desktop Nav */}
        <div className="flex items-center space-x-6 md:space-x-10">
          <Link
            to="/"
            className="text-gray-800 text-lg font-semibold hover:text-indigo-500 transition-colors"
          >
            Home
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 md:space-x-10 items-center text-gray-700 text-lg font-medium">
            {/* Blog Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDesktopBlogOpen(true)}
              onMouseLeave={() => setDesktopBlogOpen(false)}
            >
              <button className="hover:text-indigo-500 transition-colors font-medium">
                Blog ▾
              </button>
              {desktopBlogOpen && (
                <div className="absolute left-0 mt-3 w-52 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-100 z-50">
                  {categories.map((category) => (
                    <Link
                      key={category}
                      to={`/category/${category.toLowerCase()}`}
                      className="block px-5 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/show"
              className="hover:text-indigo-500 transition-colors font-medium"
            >
              Show
            </Link>
            <Link
              to="/shop"
              className="hover:text-indigo-500 transition-colors font-medium"
            >
              Shop
            </Link>
          
            <Link
              to="/about"
              className="hover:text-indigo-500 transition-colors font-medium"
            >
              About
            </Link>

            {/* Inline Search */}
            <div className="">
            </div>
          </nav>
        </div>
      
        {/* Right: Social Icons & Hamburger */}
        <div className="flex items-center ml-auto space-x-5 text-gray-600 text-xl">
          {/* Desktop Social Icons */}
          <div className="hidden md:flex space-x-5">
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

          {/* Hamburger */}
          <button
            className="md:hidden text-2xl text-gray-700 hover:text-indigo-500 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      <div>
        <SearchToggle/>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-0 right-0 w-72 h-full bg-white shadow-lg border-l border-gray-200 z-50 p-6 flex flex-col justify-start animate-slide-down">
          <nav className="flex flex-col space-y-4 text-gray-700 text-lg font-medium">
            <Link
              to="/"
              className="hover:text-indigo-500 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            {/* Mobile Blog Dropdown */}
            <div className="relative">
              <button
                className="w-full text-left hover:text-indigo-500 transition"
                onClick={() => setMobileBlogOpen(!mobileBlogOpen)}
              >
                Blog ▾
              </button>
              {mobileBlogOpen && (
                <div className="mt-2 pl-4 flex flex-col space-y-2">
                  {categories.map((category) => (
                    <Link
                      key={category}
                      to={`/category/${category.toLowerCase()}`}
                      className="hover:text-indigo-500 transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/show"
              className="hover:text-indigo-500 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Show
            </Link>
               <Link
              to="/shop"
              className="hover:text-indigo-500 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="hover:text-indigo-500 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>

            {/* Mobile Social Icons */}
            <div className="flex space-x-6 mt-6 text-gray-600 text-xl">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-500 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-500 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-500 transition"
              >
                <FaInstagram />
              </a>
            </div>

            {/* Mobile Search */}
            <div className="mt-6">
              <SearchToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
