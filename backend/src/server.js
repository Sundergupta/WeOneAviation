import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import connectDB from "./config/db.js";
import pageRoutes from "./routes/pageRoutes.js";
import { getSeoByUrl } from "./seo.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Fix __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(cors());
app.use(express.json());

// DB
connectDB();

// API routes
app.use("/api/pages", pageRoutes);

// Assets
app.use(
    "/assets",
    express.static(path.resolve(__dirname, "../../dist/assets"))
);

// ✅ SSR middleware (Express 5 SAFE)
app.use(async (req, res, next) => {
    if (
        req.originalUrl.startsWith("/api") ||
        req.originalUrl.startsWith("/assets")
    ) {
        return next();
    }

    try {
        const seo = await getSeoByUrl(req.originalUrl);

        let html = fs.readFileSync(
            path.resolve(__dirname, "../../dist/index.html"),
            "utf-8"
        );

        html = html
            .replace(/<title>.*<\/title>/, `<title>${seo.title}</title>`)
            .replace(
                "</head>",
                `<meta name="description" content="${seo.description}" /></head>`
            );

        res.status(200).type("html").send(html);
    } catch (err) {
        console.error("SSR Error:", err);
        res.status(500).send("Server Error");
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ SSR Server running on port ${PORT}`);
});
