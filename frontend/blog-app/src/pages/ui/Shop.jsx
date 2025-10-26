import React from "react";
import ProductList from "../../components/ProductList";
import Fetch from "./Fetch";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <div className="bg-white mt-10 text-gray-900">
      {/* Hero Video Section */}
      <div className="w-300 h-[80vh] mx-auto overflow-hidden shadow-lg">
        <video
          src="https://cdn.shopify.com/videos/c/o/v/2055c28dfa064e69b03cdc32f91cae65.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Section */}
      <div className="bg-pink-100 py-12 px-6 md:px-16">
        <ProductList />
      </div>

      {/* Blog Preview Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {/* Morning Routine */}
          <div className="flex-1 w-full">
            <img
              src="https://shopskinnyconfidential.com/cdn/shop/files/routine-morning.webp?v=1756343259&width=1440"
              alt="Morning Routine"
              className="w-full h-[400px] rounded-xl shadow-lg object-cover transition-transform duration-300 hover:scale-105"
            />
            <Link
              to="/blogs/68e39b93bc92c2148d485d82"
              className="block text-center text-gray-700 mt-3 font-semibold hover:text-pink-500 transition"
            >
              Morning Routine
            </Link>
          </div>

          {/* Evening Routine */}
          <div className="flex-1 w-full">
            <img
              src="https://shopskinnyconfidential.com/cdn/shop/files/routine-evening.webp?v=1756343308&width=1440"
              alt="Evening Routine"
              className="w-full h-[400px] rounded-xl shadow-lg object-cover transition-transform duration-300 hover:scale-105"
            />
            <Link
              to="/blogs/68e39befbc92c2148d485d88"
              className="block text-center text-gray-700 mt-3 font-semibold hover:text-pink-500 transition"
            >
              Evening Routine
            </Link>
          </div>
        </div>
      </div>
<div className="mx-20"><Fetch/></div>
    </div>
  );
};

export default Shop;
