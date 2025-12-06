import { useState } from "react";
import axios from "axios";

export default function AddPage() {
    const [name, setName] = useState("");
    const [slug, setSlug] = useState("");
    const [path, setPath] = useState("");

    const generateSlug = (text) => {
        return text
            .toLowerCase()
            .replace(/ /g, "-")
            .replace(/[^a-z0-9-]/g, "");
    };

    const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value);

        const autoSlug = generateSlug(value);
        setSlug(autoSlug);
        setPath("/" + autoSlug);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !slug || !path) {
            alert("Please enter a page name!");
            return;
        }

        try {
            const response = await axios.post("http://localhost:5000/api/pages", {
                name,
                slug,
                path,
                metaTitle: name,
                metaDescription: "Information about " + name,
                content: ""
            });

            alert("Page created successfully!");

            setName("");
            setSlug("");
            setPath("");

        } catch (error) {
            console.error("Error creating page:", error);
            alert("Something went wrong!");
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
            <h2>Add New Page</h2>

            <input
                type="text"
                placeholder="Page Name"
                value={name}
                onChange={handleNameChange}
            />

            <input type="text" placeholder="Slug" value={slug} readOnly />
            <input type="text" placeholder="Path" value={path} readOnly />

            <button type="submit">Create Page</button>
        </form>
    );
}
