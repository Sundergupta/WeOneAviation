// src/pages/DynamicPage.jsx

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPageBySlug } from "../api/pageApi";

export default function DynamicPage() {
    const { slug } = useParams();   // IMPORTANT: Get slug from URL
    const [page, setPage] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadPage() {
            try {
                const data = await fetchPageBySlug(slug);
                setPage(data);
            } catch (err) {
                console.error("Error loading page:", err);
            } finally {
                setLoading(false);
            }
        }

        loadPage();
    }, [slug]);

    if (loading) {
        return <h2 style={{ padding: "20px" }}>Loading...</h2>;
    }

    if (!page) {
        return <h2 style={{ padding: "20px" }}>Page Not Found</h2>;
    }

    return (
        <div style={{ padding: "20px" }}>
            <h1>{page.name}</h1>

            {page.content && (
                <div style={{ marginTop: "20px" }}>
                    <div dangerouslySetInnerHTML={{ __html: page.content }} />
                </div>
            )}
        </div>
    );
}
