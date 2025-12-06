// src/pages/DynamicPage.jsx

import { useEffect, useState } from "react";
import { fetchPageById } from "../api/pageApi";

export default function DynamicPage({ pageId }) {
    const [page, setPage] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadPage() {
            try {
                const data = await fetchPageById(pageId);
                setPage(data);
            } catch (err) {
                console.error("Error loading page:", err);
            } finally {
                setLoading(false);
            }
        }

        loadPage();
    }, [pageId]);

    if (loading) {
        return <h2 style={{ padding: "20px" }}>Loading...</h2>;
    }

    if (!page) {
        return <h2 style={{ padding: "20px" }}>Page Not Found</h2>;
    }

    return (
        <div style={{ padding: "20px" }}>
            <h1>{page.name}</h1>
            <p><strong>Slug:</strong> {page.slug}</p>
            <p><strong>Path:</strong> {page.path}</p>

            {/* Optional if you store content */}
            {page.content && (
                <div style={{ marginTop: "20px" }}>
                    <h3>Content:</h3>
                    <div dangerouslySetInnerHTML={{ __html: page.content }} />
                </div>
            )}
        </div>
    );
}
