import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  hoverImage: {
    type: String, // new field
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  badge: {
    type: String,
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
