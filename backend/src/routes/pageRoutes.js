import express from "express";
import {
    addPage,
    getPages,
    getPageById,
    getPageBySlug,
    updatePage,
    deletePage,
} from "../controllers/pageController.js";

import Page from "../models/Page.js"; // <-- IMPORTANT for SSR route

const router = express.Router();

// Add new page
router.post("/add", addPage);

// Get all pages
router.get("/", getPages);

// ==============================
// ⭐ NEW: Server-Side Render SEO Page
// URL → /api/pages/render/about-us
// ==============================
router.get("/render/:slug", async (req, res) => {
    try {
        const slug = req.params.slug;

        const page = await Page.findOne({ slug });

        if (!page) {
            return res.status(404).send("<h1>Page Not Found</h1>");
        }

        // Render EJS template with meta values
        res.render("page", { page });
    } catch (error) {
        res.status(500).send("Server Error");
    }
});

// IMPORTANT → SEO dynamic pages use slug (API JSON version)
router.get("/slug/:slug", getPageBySlug);

// Get page by ID (admin use only)
router.get("/:id", getPageById);

// Update page
router.put("/:id", updatePage);

// Delete page
router.delete("/:id", deletePage);

export default router;