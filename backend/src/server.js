import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import formRoutes from "./routes/formRoutes.js";

import connectDB from "./config/db.js";
import pageRoutes from "./routes/pageRoutes.js";
import { getSeoByUrl } from "./seo.js";

/* ===============================
   FIX __dirname (ES Modules)
================================ */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* ===============================
   LOAD ENV
================================ */
dotenv.config({
    path: path.resolve(__dirname, "../.env"),
});

/* ===============================
   APP INIT & DATABASE
================================ */
const app = express();
const PORT = process.env.PORT || 5000;
connectDB();

/* ===============================
   MIDDLEWARES
================================ */
app.use(cors());
app.use(express.json());

/* ===============================
   STATIC ASSETS
================================ */
// 1. Serve Vite assets (JS/CSS)
app.use("/assets", express.static(path.resolve(__dirname, "../../dist/assets")));

// 2. Serve other static files (Logo.webp, robots.txt, etc.) from dist root
// We use { index: false } so it doesn't serve the raw index.html before our SSR logic
app.use(express.static(path.resolve(__dirname, "../../dist"), { index: false }));

/* ===============================
   API ROUTES
================================ */
app.use("/api/form", formRoutes);
app.use("/api/pages", pageRoutes);

/* ===============================
   SSR MIDDLEWARE (The SEO Fix)
================================ */
app.use(async (req, res, next) => {
    // Skip SSR for API calls or specific asset files
    if (
        req.originalUrl.startsWith("/api") ||
        req.originalUrl.startsWith("/assets") ||
        req.originalUrl.includes(".") // Skips files like .png, .webp, .ico
    ) {
        return next();
    }

    try {
        const seo = await getSeoByUrl(req.originalUrl);
        const indexPath = path.resolve(__dirname, "../../dist/index.html");

        if (!fs.existsSync(indexPath)) {
            return res.status(404).send("Build index.html not found. Run npm run build.");
        }

        let html = fs.readFileSync(indexPath, "utf-8");

        // Fallback if backend returns nothing
        const title = seo?.title || "WeOne Aviation | Best Pilot Training";
        const description = seo?.description || "India’s trusted pilot training institute.";

        // 1. Robust Title Replacement
        html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);

        // 2. Robust Description Replacement
        // If a meta description already exists in index.html, replace it.
        if (html.includes('<meta name="description"')) {
            html = html.replace(/<meta name="description" content=".*?"\s*\/?>/, `<meta name="description" content="${description}" />`);
        } else {
            // Otherwise, inject it before the closing head tag
            html = html.replace("</head>", `<meta name="description" content="${description}" /></head>`);
        }

        res.status(200).set("Content-Type", "text/html").send(html);
    } catch (error) {
        console.error("SSR Error:", error);
        res.status(500).send("Server Error");
    }
});

/* ===============================
   START SERVER
================================ */
app.listen(PORT, () => {
    console.log(`✅ SSR Server running on port ${PORT}`);
});