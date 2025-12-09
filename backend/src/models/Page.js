import mongoose from "mongoose";

const PageSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
        },
        path: {
            type: String,
            required: true,
        },

        // ✅ SEO FIELDS TO ADD
        metaTitle: {
            type: String,
            default: "",
        },
        metaDescription: {
            type: String,
            default: "",
        },
        metaKeywords: {
            type: String,
            default: "",
        },

        // OPTIONAL (but good for social media SEO)
        ogTitle: {
            type: String,
            default: "",
        },
        ogDescription: {
            type: String,
            default: "",
        },
        ogImage: {
            type: String,
            default: "",
        },
    },
    { timestamps: true }
);

export default mongoose.model("Page", PageSchema);
