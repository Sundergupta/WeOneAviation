import { useEffect, useState } from "react";

export default function Pages() {
    const [pages, setPages] = useState([]);

    const fetchPages = async () => {
        try {
            const res = await fetch("http://localhost:5000/api/pages");
            const data = await res.json();

            // Your backend returns: { success: true, pages: [...] }
            if (data.success && Array.isArray(data.pages)) {
                setPages(data.pages);
            } else {
                setPages([]);
            }
        } catch (error) {
            console.error("Error fetching pages:", error);
            setPages([]);
        }
    };

    useEffect(() => {
        fetchPages();
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h2>All Pages</h2>

            <table border="1" cellPadding="10" style={{ marginTop: "20px", width: "100%" }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Slug</th>
                        <th>Path</th>
                    </tr>
                </thead>

                <tbody>
                    {pages.length > 0 ? (
                        pages.map((p, index) => (
                            <tr key={index}>
                                <td>{p.name}</td>
                                <td>{p.slug}</td>
                                <td>{p.path}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={3} style={{ textAlign: "center" }}>
                                No pages found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
