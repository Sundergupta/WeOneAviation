import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Page() {
    const { slug } = useParams();
    const [page, setPage] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // ⛔ IMPORTANT GUARD
        if (!slug) return;

        const fetchPage = async () => {
            try {
                const res = await fetch(
                    `http://localhost:5000/api/pages/slug/${slug}`
                );

                if (!res.ok) {
                    throw new Error("Page not found");
                }

                const data = await res.json();
                setPage(data.page);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchPage();
    }, [slug]);

    if (!slug) return <p>Invalid page URL</p>;
    if (error) return <p>{error}</p>;
    if (!page) return <p>Loading...</p>;

    return (
        <div style={{ padding: "20px" }}>
            <h1>{page.name}</h1>
            <p>{page.metaDescription}</p>
        </div>
    );
}
