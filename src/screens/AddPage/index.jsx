import { useState } from "react";
import axios from "axios";

export default function AddPage() {
    const [name, setName] = useState("");
    const [slug, setSlug] = useState("");
    const [path, setPath] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:5000/api/pages/add", {
                name,
                slug,
                path,
                metaTitle: name + " | My Website",   // optional default
                metaDescription: "Page about " + name, // optional default
                content: "" // you can change later
            });

            console.log("Response:", response.data);
            alert("Page created successfully!");

            // Reset inputs
            setName("");
            setSlug("");
            setPath("");
        } catch (error) {
            console.error("Error creating page:", error);
            alert("Something went wrong!");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add New Page</h2>

            <input
                type="text"
                placeholder="Page Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="text"
                placeholder="Slug"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
            />

            <input
                type="text"
                placeholder="Path"
                value={path}
                onChange={(e) => setPath(e.target.value)}
            />

            <button type="submit">Create Page</button>
        </form>
    );
}
