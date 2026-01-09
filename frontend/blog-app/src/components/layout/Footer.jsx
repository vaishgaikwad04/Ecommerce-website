import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-12" style={{ backgroundColor: "var(--gig-pop)", color: "var(--color-dark-blue)" }}>
      {/* Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold text-center py-12">
        The Skinny Confidential
      </h1>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-12 flex flex-col md:flex-row justify-between gap-8 md:gap-12">
        {/* Table of Links */}
        <div className="w-full md:w-2/3">
          <table className="table-auto w-full text-left">
            <thead>
              <tr className="text-lg md:text-xl font-light border-b border-white/30">
                <th className="px-2 md:px-4 py-2">Blog</th>
                <th className="px-2 md:px-4 py-2">Shop</th>
                <th className="px-2 md:px-4 py-2">Lauryn Bosstick</th>
              </tr>
            </thead>
            <tbody className="text-base md:text-lg mt-2">
              <tr>
                <td className="px-2 py-1">
                  <Link to="/realness" className="hover:text-pink-200 transition-colors">Realness</Link>
                </td>
                <td className="px-2 py-1">
                  <Link to="/tsc-products" className="hover:text-pink-200 transition-colors">TSC Products</Link>
                </td>
                <td className="px-2 py-1">
                  <Link to="/contact" className="hover:text-pink-200 transition-colors">Contact</Link>
                </td>
              </tr>
              <tr>
                <td className="px-2 py-1">
                  <Link to="/wellness" className="hover:text-pink-200 transition-colors">Wellness</Link>
                </td>
                <td className="px-2 py-1">
                  <Link to="/amazon-store" className="hover:text-pink-200 transition-colors">Amazon Store</Link>
                </td>
                <td className="px-2 py-1">
                  <Link to="/about" className="hover:text-pink-200 transition-colors">About</Link>
                </td>
              </tr>
              <tr>
                <td className="px-2 py-1">
                  <Link to="/beauty" className="hover:text-pink-200 transition-colors">Beauty</Link>
                </td>
                <td className="px-2 py-1">
                  <Link to="/ltk" className="hover:text-pink-200 transition-colors">LTK</Link>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Subscribe + Social */}
        <div className="flex flex-col items-center md:items-end w-full md:w-1/3 mt-6 md:mt-0">
          <h2 className="text-lg md:text-xl font-semibold mb-3">Get the Skinny</h2>
          <div className="flex w-full bg-white max-w-xs rounded-full overflow-hidden shadow-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 text-gray-700 text-sm md:text-base placeholder-gray-400 outline-none"
            />
            <button className=" text-white px-4 md:px-6 py-2 md:py-3 font-bold hover:scale-105 transition-transform" style={{  backgroundColor: "var(--color-dark-blue)" }}>
              →
            </button>
          </div>

          <div className="flex space-x-3 md:space-x-5 mt-6 md:mt-8 text-2xl md:text-3xl">
            <a href="#" className="hover:text-pink-300 transition-colors"><FaLinkedin /></a>
            <a href="#" className="hover:text-pink-300 transition-colors"><FaInstagram /></a>
            <a href="#" className="hover:text-pink-300 transition-colors"><FaFacebookF /></a>
            <a href="#" className="hover:text-pink-300 transition-colors"><FaTiktok /></a>
            <a href="#" className="hover:text-pink-300 transition-colors"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center py-4 md:py-6 border-t border-white/30">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">Follow along</h3>
        <div className="flex justify-center flex-wrap gap-2 md:gap-3 mb-3 md:mb-4">
          {["Blog", "Book", "Podcast", "Show"].map((item) => (
            <button
              key={item}
              className="w-24 md:w-28 bg-white text-black rounded-full px-3 py-2 md:px-4 md:py-2 shadow hover:text-pink-400 transition-colors "
            >
              {item}
            </button>
          ))}
        </div>
        <div className="space-x-2 md:space-x-4 text-xs md:text-sm">
          <Link to="/shipping" className="hover:text-pink-200 transition-colors">Shipping/Returns</Link> |
          <Link to="/privacy" className="hover:text-pink-200 transition-colors">Privacy</Link> |
          <Link to="/terms" className="hover:text-pink-200 transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
