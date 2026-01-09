import React from "react";
import ProductList from "../../components/ProductList";
import Fetch from "./Fetch";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* HERO VIDEO */}
      <section className="max-w-7xl mx-auto px-4 mt-10">
        <div className="h-[60vh] rounded-2xl overflow-hidden shadow-lg">
          <video
            src="https://cdn.shopify.com/videos/c/o/v/2055c28dfa064e69b03cdc32f91cae65.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-pink-100 mt-16 py-16">
        <div className="max-w-7xl mx-auto px-4">
         
          <ProductList />
        </div>
      </section>

      {/* BLOG ROUTINES */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        

        <div className="grid md:grid-cols-2 gap-10">
          {/* Morning */}
          <div className="group">
            <img
              src="https://shopskinnyconfidential.com/cdn/shop/files/routine-morning.webp?v=1756343259&width=1440"
              alt="Morning Routine"
              className="h-[320px] w-full rounded-2xl object-cover shadow-md group-hover:scale-105 transition"
            />
            <Link
              to="/blogs/68e39b93bc92c2148d485d82"
              className="block text-center mt-4 text-lg font-semibold hover:text-pink-500"
            >
              Morning Routine →
            </Link>
          </div>

          {/* Evening */}
          <div className="group">
            <img
              src="https://shopskinnyconfidential.com/cdn/shop/files/routine-evening.webp?v=1756343308&width=1440"
              alt="Evening Routine"
              className="h-[320px] w-full rounded-2xl object-cover shadow-md group-hover:scale-105 transition"
            />
            <Link
              to="/blogs/68e39befbc92c2148d485d88"
              className="block text-center mt-4 text-lg font-semibold hover:text-pink-500"
            >
              Evening Routine →
            </Link>
          </div>
        </div>
      </section>

      {/* RECENT POSTS */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <Fetch />
        </div>
      </section>
    </div>
  );
};

export default Shop;
