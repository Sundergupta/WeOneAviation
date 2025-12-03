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
    },
    { timestamps: true }
);

export default mongoose.model("Page", PageSchema);
