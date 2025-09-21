import React from "react";
import ProductList from "../../components/ProductList";
import Fetch from "./Fetch";

const Shop = () => {
  return (
    <div>
      <div className="max-w-10xl px-26 px-10 py-16 flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Image Section */}
        <div className="flex-1">
          <img
            src="https://shopskinnyconfidential.com/cdn/shop/files/BROWPEPTIDE_about.png?crop=center&height=1024&v=1732735535&width=1024"
            alt="Shop Product"
            className="w-full h-auto rounded-xl shadow-2xl object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 text-center mt-10 lg:text-left">
          <p
            className="text-gray-700 text-base md:text-2xl py-16 mt-10 leading-relaxed"
            style={{ color: "var(--color-dark-blue)" }}
          >
            The <span className="font-semibold">Skinny Confidential</span> was
            built by Lauryn Bosstick to upgrade and romanticize your daily
            wellness and beauty routine. We are committed to sourcing
            high-quality ingredients and developing effective, innovative
            products that are beautiful to look at. The foundation of your life
            starts with a commitment to small habits that lead to big results.
            Whether it’s an energizing morning ritual or a relaxing evening
            routine, we help you habit-stack wellness to elevate your day.
          </p>
        </div>
      </div>

      <div className="bg-pink-100 py-12 px-6 md:px-16">
        <ProductList />
      </div>

      <div className="max-w-8xl mx-18 px-6 py-12">
        {/* Heading */}
      
        {/* Images Section */}
        <div className="flex flex-col md:flex-row gap-6 mt-12 items-center">
          <div className="flex-1">
            <img
              src="https://shopskinnyconfidential.com/cdn/shop/files/routine-morning.webp?v=1756343259&width=1440"
              alt="Morning Routine"
              className="w-full h-130 rounded-xl shadow-lg object-cover"
            />
            <p className="text-center text-gray-700 mt-2 font-medium">
              Morning Routine
            </p>
          </div>

          <div className="flex-1">
            <img
              src="https://shopskinnyconfidential.com/cdn/shop/files/routine-evening.webp?v=1756343308&width=1440"
              alt="Evening Routine"
              className="w-full h-130 rounded-xl shadow-lg object-cover"
            />
            <p className="text-center text-gray-700 mt-2 font-medium">
              Evening Routine
            </p>
          </div>
        </div>
      </div>
      <Fetch />
    </div>
  );
};

export default Shop;
