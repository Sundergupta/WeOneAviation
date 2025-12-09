import { useState } from "react";
import { addPage } from "../api/pageApi";  // use your api file
import { useNavigate } from "react-router-dom";

export default function AddPage() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [slug, setSlug] = useState("");
    const [path, setPath] = useState("");
    const [metaTitle, setMetaTitle] = useState("");
    const [metaDescription, setMetaDescription] = useState("");
    const [content, setContent] = useState("");

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
        setMetaTitle(value);
        setMetaDescription("Information about " + value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name) {
            alert("Please enter a page name!");
            return;
        }

        const pageData = {
            name,
            slug,
            path,
            metaTitle,
            metaDescription,
            content
        };

        try {
            await addPage(pageData);
            alert("Page created successfully!");

            // reset fields
            setName("");
            setSlug("");
            setPath("");
            setMetaTitle("");
            setMetaDescription("");
            setContent("");

            navigate("/admin/pages"); // redirect to page list

        } catch (error) {
            console.error("Error creating page:", error);
            alert("Something went wrong!");
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ padding: "20px", display: "grid", gap: "10px", maxWidth: "500px" }}>
            <h2>Add New Page</h2>

            <input type="text" placeholder="Page Name" value={name} onChange={handleNameChange} />

            <input type="text" placeholder="Slug" value={slug} readOnly />
            <input type="text" placeholder="Path" value={path} readOnly />

            <input
                type="text"
                placeholder="Meta Title"
                value={metaTitle}
                onChange={(e) => setMetaTitle(e.target.value)}
            />

            <textarea
                placeholder="Meta Description"
                rows="3"
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
            ></textarea>

            <textarea
                placeholder="Page Content (HTML allowed)"
                rows="5"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            ></textarea>

            <button type="submit">Create Page</button>
        </form>
    );
}
