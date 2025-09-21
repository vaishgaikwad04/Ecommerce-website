import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import blogRoutes from "./routes/blogRoutes.js"; // 👈 import routes
import productRoutes from './routes/productRoutes.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());          
app.use(express.urlencoded({ extended: true })); 
app.use(cors({ origin: "http://localhost:5173", credentials: true })); // 👈 set frontend URL (Vite default is 5173)
app.use(cookieParser());   

// DB connection
connectDB();

// Routes
app.get("/", (req, res) => {
  res.send("hi");
});

app.use("/api/blogs", blogRoutes); // 👈 mount blog routes
app.use("/api/products", productRoutes);


// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
