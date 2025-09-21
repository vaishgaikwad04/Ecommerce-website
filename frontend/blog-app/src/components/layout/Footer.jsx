import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-16 " style={{ backgroundColor: "var(--gig-pop)", color: "var(--color-dark-blue)" }}>
      {/* Title */}
      <h1 className="text-6xl md:text-7xl text-white font-semibold text-center py-24">
        The Skinny Confidential
      </h1>

      <div className="max-w-8xl mx-34 px-6 py-12 flex flex-col md:flex-row justify-between gap-16 md:gap-24">
        {/* Table of Links */}
        <div className="w-full md:w-2/3">
          <table className="table-auto w-full text-left">
            <thead>
              <tr className="text-2xl md:text-4xl font-light border-b border-white/30">
                <th className="px-8 md:px-16 py-4 md:py-6">Blog</th>
                <th className="px-8 md:px-16 py-4 md:py-6">Shop</th>
                <th className="px-8 md:px-16 py-4 md:py-6">Lauryn Bosstick</th>
              </tr>
            </thead>
            <tbody className="text-xl mt-4 md:text-2xl">
              <tr>
                <td className="px-16 py-3">
                  <Link to="/realness" className="hover:text-pink-200 transition-colors">
                    Realness
                  </Link>
                </td>
                <td className="px-16 py-3">
                  <Link to="/tsc-products" className="hover:text-pink-200 transition-colors">
                    TSC Products
                  </Link>
                </td>
                <td className="px-17 py-3">
                  <Link to="/contact" className="hover:text-pink-200 transition-colors">
                    Contact
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="px-16 py-3">
                  <Link to="/wellness" className="hover:text-pink-200 transition-colors">
                    Wellness
                  </Link>
                </td>
                <td className="px-16 py-3">
                  <Link to="/amazon-store" className="hover:text-pink-200 transition-colors">
                    Amazon Store
                  </Link>
                </td>
                <td className="px-17 py-3">
                  <Link to="/about" className="hover:text-pink-200 transition-colors">
                    About
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="px-16 py-3">
                  <Link to="/beauty" className="hover:text-pink-200 transition-colors">
                    Beauty
                  </Link>
                </td>
                <td className="px-16 py-3">
                  <Link to="/ltk" className="hover:text-pink-200 transition-colors">
                    LTK
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Subscribe + Social */}
        <div className="flex flex-col items-center md:items-end w-full md:w-1/3 mt-8 md:mt-0">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Get the Skinny</h2>
          <div className="flex w-full bg-white max-w-xs rounded-full overflow-hidden shadow-lg">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 text-gray-700 text-lg placeholder-gray-400 outline-none"
            />
            <button className="bg-white text-white  px-6 py-3 font-bold hover:bg-white transition-transform transform hover:scale-105">
              →
            </button>
          </div>

          <div className="flex space-x-6 mt-10 text-4xl">
            <a href="#" className="hover:text-pink-300 transition-colors"><FaLinkedin /></a>
            <a href="#" className="hover:text-pink-300 transition-colors"><FaInstagram /></a>
            <a href="#" className="hover:text-pink-300 transition-colors"><FaFacebookF /></a>
            <a href="#" className="hover:text-pink-300 transition-colors"><FaTiktok /></a>
            <a href="#" className="hover:text-pink-300 transition-colors"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center py-8 border-t border-white/30">
        <h3 className="text-2xl md:text-3xl mb-4 font-semibold">Follow along</h3>
        <div className="flex justify-center flex-wrap gap-4 mb-4">
          {["Blog", "Book", "Podcast", "Show"].map((item) => (
            <button
              key={item}
              className="w-34 md:w-40 bg-white text-black-600 rounded-full px-6 py-3 shadow hover:text-pink-400 transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
        <div className="space-x-4 text-sm md:text-base">
          <Link to="/shipping" className="hover:text-pink-200 transition-colors">Shipping/Returns</Link> |
          <Link to="/privacy" className="hover:text-pink-200 transition-colors">Privacy</Link> |
          <Link to="/terms" className="hover:text-pink-200 transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
