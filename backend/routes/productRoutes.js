import express from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

// CRUD Routes
router.post("/", createProduct);    
router.get("/get", getProducts);        // Read all
router.get("/:id", getProductById);  // Read one // Create
router.put("/:id", updateProduct);   // Update
router.delete("/:id", deleteProduct);// Delete

export default router;
