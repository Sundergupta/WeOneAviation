import express from "express";
import pageRoutes from "./routes/pageRoutes.js";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import path from "path";
import { fileURLToPath } from "url";
import prerender from "prerender-node";   // <-- ⭐ ADD THIS

dotenv.config();

const app = express();

// Fix __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(cors());
app.use(express.json());

// ⭐ PRERENDER MIDDLEWARE (must be BEFORE routes)
app.use(
    prerender.set("prerenderToken", "MkuCwme8QpJyYPjDqaXK")
);

// ⭐ Serve React build files
app.use(express.static(path.join(__dirname, "../public")));

// ⭐ Correct EJS Setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

// MongoDB Connect
connectDB();

// API Routes
app.use("/api/pages", pageRoutes);

// Default route
app.get("/", (req, res) => {
    res.send("Backend Server Running Successfully ✔");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
