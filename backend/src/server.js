import express from "express";
import pageRoutes from "./routes/pageRoutes.js";

import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// MongoDB Connect
connectDB();

// Default route
app.get("/", (req, res) => {
    res.send("Backend Server Running Successfully ✔");
});



// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
app.use("/api/pages", pageRoutes);
