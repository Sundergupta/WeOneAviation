import Page from "../models/Page.js";

// Add new page
export const addPage = async (req, res) => {
    try {
        const { name, slug, path } = req.body;

        const page = await Page.create({ name, slug, path });

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

// Get single page
export const getPageById = async (req, res) => {
    try {
        const page = await Page.findById(req.params.id);
        if (!page) return res.status(404).json({ success: false, message: "Page not found" });

        res.status(200).json({ success: true, page });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// Update page
export const updatePage = async (req, res) => {
    try {
        const page = await Page.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!page) return res.status(404).json({ success: false, message: "Page not found" });

        res.status(200).json({ success: true, page });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// Delete page
export const deletePage = async (req, res) => {
    try {
        const page = await Page.findByIdAndDelete(req.params.id);

        if (!page) return res.status(404).json({ success: false, message: "Page not found" });

        res.status(200).json({ success: true, message: "Page deleted" });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
