import { useState } from "react";
import axios from "axios";

export default function CreateProduct() {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    hoverImage: "",
    description: "",
    price: "",
    badge: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://ecommerce-website-blog.onrender.com/api/products", formData);
      alert("Product added!");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
      <input type="text" name="name" placeholder="Product Name"
        value={formData.name} onChange={handleChange} className="border p-2 w-full" />

      <input type="text" name="image" placeholder="Main Image URL"
        value={formData.image} onChange={handleChange} className="border p-2 w-full" />

      <input type="text" name="hoverImage" placeholder="Hover Image URL"
        value={formData.hoverImage} onChange={handleChange} className="border p-2 w-full" />

      <input type="text" name="price" placeholder="Price"
        value={formData.price} onChange={handleChange} className="border p-2 w-full" />

      <input type="text" name="badge" placeholder="Badge (optional)"
        value={formData.badge} onChange={handleChange} className="border p-2 w-full" />

      <textarea name="description" placeholder="Description"
        value={formData.description} onChange={handleChange} className="border p-2 w-full"></textarea>

      <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded">
        Add Product
      </button>
    </form>
  );
}
