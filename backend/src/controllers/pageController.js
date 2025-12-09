import Page from "../models/Page.js";

// Add new page
export const addPage = async (req, res) => {
    try {
        const {
            name,
            slug,
            path,
            metaTitle,
            metaDescription,
            metaKeywords,
            ogTitle,
            ogDescription,
            ogImage,
        } = req.body;

        const page = await Page.create({
            name,
            slug,
            path,
            metaTitle,
            metaDescription,
            metaKeywords,
            ogTitle,
            ogDescription,
            ogImage,
        });

        res.status(201).json({ success: true, page });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// Get all pages
export const getPages = async (req, res) => {
    try {
        const pages = await Page.find().sort({ createdAt: -1 });
        res.status(200).json({ success: true, pages });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// Get page by slug
export const getPageBySlug = async (req, res) => {
    try {
        const page = await Page.findOne({ slug: req.params.slug });

        if (!page)
            return res.status(404).json({ success: false, message: "Page not found" });

        // 👉 Return ONLY SEO RELATED DATA for frontend meta tags
        res.status(200).json({
            success: true,
            page: {
                name: page.name,
                slug: page.slug,
                path: page.path,
                metaTitle: page.metaTitle,
                metaDescription: page.metaDescription,
                metaKeywords: page.metaKeywords,
                ogTitle: page.ogTitle,
                ogDescription: page.ogDescription,
                ogImage: page.ogImage,
            },
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// Get page by ID
export const getPageById = async (req, res) => {
    try {
        const page = await Page.findById(req.params.id);
        if (!page)
            return res.status(404).json({ success: false, message: "Page not found" });

        res.status(200).json({ success: true, page });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// Update page
export const updatePage = async (req, res) => {
    try {
        const page = await Page.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!page)
            return res.status(404).json({ success: false, message: "Page not found" });

        res.status(200).json({ success: true, page });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// Delete page
export const deletePage = async (req, res) => {
    try {
        const page = await Page.findByIdAndDelete(req.params.id);

        if (!page)
            return res.status(404).json({ success: false, message: "Page not found" });

        res.status(200).json({ success: true, message: "Page deleted" });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
