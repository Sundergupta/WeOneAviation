import mongoose from "mongoose";
import Page from "../src/models/Page.js";
import dotenv from "dotenv";
dotenv.config();

const pages = [
    { name: "Home", slug: "home", path: "/" },
    { name: "Pilot Training", slug: "pilot-training", path: "/pilot-training" },
    { name: "Pilot Training in India", slug: "pilot-training-in-india", path: "/pilot-training-in-india" },
    { name: "Pilot Training in Delhi", slug: "pilot-training-in-delhi", path: "/pilot-training-in-delhi" },
    // Add all your state pages here...
];

(async () => {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected");

    await Page.deleteMany(); // Optional
    await Page.insertMany(pages);

    console.log("Pages imported");
    process.exit();
})();