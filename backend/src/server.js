import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import connectDB from "./config/db.js";
import pageRoutes from "./routes/pageRoutes.js";
import { getSeoByUrl } from "./seo.js";

/* ===============================
   FIX __dirname (ES Modules)
================================ */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* ===============================
   LOAD ENV MANUALLY (FIX)
   .env is in /backend/.env
================================ */
dotenv.config({
    path: path.resolve(__dirname, "../.env"),
});

/* ===============================
   DEBUG (TEMPORARY – SAFE)
   Remove later if you want
================================ */
console.log("MONGO_URI =", process.env.MONGO_URI);

/* ===============================
   APP INIT
================================ */
const app = express();
const PORT = process.env.PORT || 5000;

/* ===============================
   MIDDLEWARES
================================ */
app.use(cors());
app.use(express.json());

/* ===============================
   DATABASE
================================ */
connectDB();

/* ===============================
   API ROUTES
================================ */
app.use("/api/pages", pageRoutes);

/* ===============================
   STATIC ASSETS (VITE BUILD)
   dist must be at project root
================================ */
app.use(
    "/assets",
    express.static(path.resolve(__dirname, "../../dist/assets"))
);

/* ===============================
   SSR MIDDLEWARE
================================ */
app.use(async (req, res, next) => {
    if (
        req.originalUrl.startsWith("/api") ||
        req.originalUrl.startsWith("/assets")
    ) {
        return next();
    }

    try {
        const seo = await getSeoByUrl(req.originalUrl);

        const indexPath = path.resolve(
            __dirname,
            "../../dist/index.html"
        );

        let html = fs.readFileSync(indexPath, "utf-8");

        html = html
            .replace(/<title>.*<\/title>/, `<title>${seo.title}</title>`)
            .replace(
                "</head>",
                `<meta name="description" content="${seo.description}" /></head>`
            );

        res.status(200).type("html").send(html);
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
