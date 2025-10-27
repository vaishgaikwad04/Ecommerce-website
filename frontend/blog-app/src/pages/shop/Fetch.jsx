import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(null);
  const [editData, setEditData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    hoverImage: "",
  });

  // Fetch products
  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://ecommerce-website-blog.onrender.com/api/products");
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Delete product
  const deleteProduct = async (id) => {
    try {
      await axios.delete(`https://ecommerce-website-blog.onrender.com/api/products/${id}`);
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  // Start editing
  const startEdit = (product) => {
    setEditing(product._id);
    setEditData({
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image,
      hoverImage: product.hoverImage || "",
    });
  };

  // Handle input change
  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  // Save update
  const updateProduct = async (id) => {
    try {
      await axios.put(`https://ecommerce-website-blog.onrender.com/api/products/${id}`, editData);
      setEditing(null);
      fetchProducts();
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Products</h2>
      <ul>
        {products.map((p) => (
          <li
            key={p._id}
            className="flex flex-col md:flex-row justify-between items-start md:items-center border p-4 mb-4 rounded"
          >
            {editing === p._id ? (
              <div className="flex flex-col gap-2 w-full">
                <input
                  type="text"
                  name="name"
                  value={editData.name}
                  onChange={handleEditChange}
                  className="border p-1"
                  placeholder="Name"
                />
                <textarea
                  name="description"
                  value={editData.description}
                  onChange={handleEditChange}
                  className="border p-1"
                  placeholder="Description"
                />
                <input
                  type="number"
                  name="price"
                  value={editData.price}
                  onChange={handleEditChange}
                  className="border p-1"
                  placeholder="Price"
                />
                <input
                  type="text"
                  name="image"
                  value={editData.image}
                  onChange={handleEditChange}
                  className="border p-1"
                  placeholder="Main Image URL"
                />
                <input
                  type="text"
                  name="hoverImage"
                  value={editData.hoverImage}
                  onChange={handleEditChange}
                  className="border p-1"
                  placeholder="Hover Image URL"
                />
                <div className="flex gap-2">
                  <button
                    onClick={() => updateProduct(p._id)}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditing(null)}
                    className="bg-gray-500 text-white px-3 py-1 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-4 relative">
                  <div className="w-20 h-20 relative">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover rounded absolute top-0 left-0 transition-opacity duration-300 hover:opacity-0"
                    />
                    {p.hoverImage && (
                      <img
                        src={p.hoverImage}
                        alt={`${p.name} hover`}
                        className="w-full h-full object-cover rounded absolute top-0 left-0 opacity-0 hover:opacity-100"
                      />
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold">{p.name}</h3>
                    <p className="text-sm text-gray-600">{p.description}</p>
                    <p className="text-blue-600 font-semibold">₹{p.price}</p>
                  </div>
                </div>
                <div className="flex gap-2 mt-2 md:mt-0">
                  <button
                    onClick={() => startEdit(p)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteProduct(p._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
