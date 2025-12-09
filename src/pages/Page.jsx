import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Page() {
    const { slug } = useParams();
    const [page, setPage] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/api/pages/slug/${slug}`)
            .then(res => res.json())
            .then(data => setPage(data.page));
    }, [slug]);

    if (!page) return <p>Loading...</p>;

    return (
        <div style={{ padding: "20px" }}>
            <h1>{page.name}</h1>
            <p>{page.metaDescription}</p>
        </div>
    );
}
