import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import blogRoutes from "./routes/blogRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ CORS configuration
app.use(
  cors({
    origin: [
      "http://localhost:5173"    ],
    credentials: true, // allows sending cookies, auth headers, etc.
  })
);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ✅ Connect to MongoDB
connectDB();

// ✅ Routes
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

app.use("/api/products", productRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/blogs/:id/comments", commentRoutes);

// ✅ Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
