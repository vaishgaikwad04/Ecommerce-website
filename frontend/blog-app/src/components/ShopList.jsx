import React from 'react';
import ProductList from '../../components/ProductList';

const Shop = () => {
  return (
    <div>
   

   <div className="bg-pink-100 py-12 px-6 md:px-16">
  <div className="max-w-8xl mx-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
    
    {/* Left Content */}
    <div className="text-center lg:text-left space-y-6 mr-24 mt-160">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
        Don't Put Your Routine on Hold
      </h1>
      <p className="text-lg text-gray-700">
        Subscribe and save <span className="font-semibold">15%</span> and your refills 
        will be delivered right to your door.
      </p>
      <button className="bg-pink-500 hover:bg-pink-600 mt-8 text-white font-medium px-6 py-3 rounded-full shadow-md transition">
        Shop Now
      </button>
    </div>

   {/* Right Images */}
    <div className="grid grid-cols-2 gap-8">
  <div className="flex flex-col gap-4">
    <img
      src="https://shopskinnyconfidential.com/cdn/shop/files/1024-TSC2241-Edit-gt.png?crop=center&format=webp&height=1024&v=1746547250&width=1024"
      alt="Product 1"
      className="rounded-2xl h-90 shadow-md"
    />
    <img
      src="https://shopskinnyconfidential.com/cdn/shop/files/SPF-BANNER-NEWArtboard-3_11884ef7-1b3c-429d-a466-0b74763425f5_3.png?crop=center&format=webp&height=1024&v=1739368582&width=1024"
      alt="Product 2"
      className="rounded-2xl h-50 shadow-md"
    />
    <img
      src="https://shopskinnyconfidential.com/cdn/shop/files/SPF-BANNER-NEWArtboard-3_11884ef7-1b3c-429d-a466-0b74763425f5_2.png?crop=center&format=webp&height=1024&v=1738147478&width=1024"
      alt="Product 3"
      className="rounded-2xl h-90 shadow-md"
    />
  </div>
  <div className="col-span-1 lg:col-span-1">
   <img
  src="https://shopskinnyconfidential.com/cdn/shop/files/SPF-BANNER-NEWArtboard-3_1_75412f0c-9e99-4d60-86fa-c6f01802e651.png?crop=center&height=1024&v=1738148123&width=1024"
  alt="Product 4"
  className="rounded-2xl shadow-lg w-[100%]  h-240 object-cover"
/>

  </div>
  
</div> 
 </div>
<ProductList/>

 
</div>









<div className="max-w-8xl mx-18 px-6 py-12">
  {/* Heading */}
  <h2 className="text-4xl md:text-6xl font-bold  text-left mb-8"  style={{  color: "var(--color-dark-blue)" }}>
    SHOP LAURYN'S ROUTINE
  </h2>

  {/* Images Section */}
  <div className="flex flex-col md:flex-row gap-6 mt-12 items-center">
    <div className="flex-1">
      <img
        src="https://shopskinnyconfidential.com/cdn/shop/files/routine-morning.webp?v=1756343259&width=1440"
        alt="Morning Routine"
        className="w-full h-140 rounded-xl shadow-lg object-cover"
      />
      <p className="text-center text-gray-700 mt-2 font-medium">Morning Routine</p>
    </div>
    
    <div className="flex-1">
      <img
        src="https://shopskinnyconfidential.com/cdn/shop/files/routine-evening.webp?v=1756343308&width=1440"
        alt="Evening Routine"
        className="w-full h-140 rounded-xl shadow-lg object-cover"
      />
      <p className="text-center text-gray-700 mt-2 font-medium">Evening Routine</p>
    </div>
  </div>
</div>

    </div>
  );
};

export default Shop;
