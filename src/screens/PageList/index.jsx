// src/pages/PageList.jsx

import { useEffect, useState } from "react";
import { fetchPages, deletePage } from "../api/pageApi";
import { Link } from "react-router-dom";

export default function PageList() {
    const [pages, setPages] = useState([]);

    useEffect(() => {
        loadPages();
    }, []);

    async function loadPages() {
        const data = await fetchPages();
        setPages(data);
    }

    async function handleDelete(id) {
        if (!window.confirm("Are you sure you want to delete this page?")) return;

        await deletePage(id);
        loadPages(); // refresh list
    }

    return (
        <div style={{ padding: "20px" }}>
            <h1>All Pages</h1>

            <Link to="/add-page">
                <button style={{ margin: "10px 0" }}>+ Add New Page</button>
            </Link>

            {pages.length === 0 ? (
                <p>No pages found.</p>
            ) : (
                <table border="1" width="100%" cellPadding="10">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Slug</th>
                            <th>Path</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pages.map((page) => (
                            <tr key={page._id}>
                                <td>{page.name}</td>
                                <td>{page.slug}</td>
                                <td>{page.path}</td>

                                <td>
                                    {/* View Page */}
                                    <Link to={`/page/${page.slug}`}>
                                        <button>View</button>
                                    </Link>

                                    {/* Edit Page */}
                                    <Link to={`/edit-page/${page._id}`}>
                                        <button style={{ marginLeft: "10px" }}>
                                            Edit
                                        </button>
                                    </Link>

                                    {/* Delete Page */}
                                    <button
                                        style={{ marginLeft: "10px", color: "red" }}
                                        onClick={() => handleDelete(page._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
