import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://ecommerce-website-blog.onrender.com//api/products");
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="max-w-8xl mx-20 px-6 mt-14 py-10">
      <h2 className="text-4xl font-bold text-center mb-10" style={{  color: "var(--color-dark-blue)" }}>
        The Skinny <span className="italic">Confidential</span>
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"  style={{  color: "var(--color-dark-blue)" }}>
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-[#faf6f2] rounded-2xl shadow-lg p-4 flex flex-col items-center text-center hover:shadow-xl transition"
          >
            {/* Image Swap on Hover */}
            <div className="relative w-78 h-94 mb-4 group overflow-hidden rounded-lg">
              {/* Default Image */}
              <img
                src={product.image}
                alt={product.name}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  product.hoverImage ? "opacity-100 group-hover:opacity-0" : "opacity-100"
                }`}
              />

              {/* Hover Image */}
              {product.hoverImage && (
                <img
                  src={product.hoverImage}
                  alt={`${product.name} hover`}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                />
              )}

              {/* Badge */}
              {product.badge && (
                <span className="absolute top-3 left-3 bg-blue-900 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Rating */}
            <div className="flex justify-center mb-2 text-yellow-500">
              {"★★★★★".split("").map((star, index) => (
                <span key={index}>★</span>
              ))}
            </div>

            {/* Product Name */}
            <h3 className="font-semibold text-lg"  style={{  color: "var(--color-dark-blue)" }}>{product.name}</h3>

            {/* Price */}
            <p className="text-lg font-bold mb-3"  style={{  color: "var(--color-dark-blue)" }}>${product.price}</p>

            {/* Add to Cart Button */}
         <button
  className="w-full py-2 border rounded-full font-semibold transition-transform duration-300 ease-in-out 
             hover:scale-105"
  style={{ color: "var(--color-dark-blue)" }}
>
  ADD TO CART ${product.price}
</button>

          </div>
        ))}
      </div>
    </div>
  );
}
