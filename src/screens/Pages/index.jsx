// src/pages/Page.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Page() {
    const { slug } = useParams();
    const [pageData, setPageData] = useState(null);

    useEffect(() => {
        const fetchPageData = async () => {
            try {
                const res = await fetch(`http://localhost:5000/api/pages/slug/${slug}`);
                const data = await res.json();

                if (data.success) {
                    setPageData(data.page);
                }
            } catch (err) {
                console.error("Error fetching page data:", err);
            }
        };

        fetchPageData();
    }, [slug]);

    if (!pageData) return <p>Loading...</p>;

    return (
        <>
            {/* ⭐ Dynamic SEO Meta Tags */}
            <Helmet>
                <title>{pageData.metaTitle}</title>
                <meta name="description" content={pageData.metaDescription} />
                <meta name="keywords" content={pageData.metaKeywords} />

                {/* Open Graph */}
                <meta property="og:title" content={pageData.ogTitle || pageData.metaTitle} />
                <meta property="og:description" content={pageData.ogDescription || pageData.metaDescription} />
                {pageData.ogImage && <meta property="og:image" content={pageData.ogImage} />}
            </Helmet>

            {/* Page Content */}
            <div style={{ padding: "20px" }}>
                <h1>{pageData.name}</h1>
                <p>Slug: {pageData.slug}</p>
                <p>Path: {pageData.path}</p>

                <hr />

                {/* Later you can add dynamic content here */}
                <p>This is the dynamic page content area.</p>
            </div>
        </>
    );
}
