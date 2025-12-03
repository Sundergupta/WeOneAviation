// src/api/pageApi.js

export const fetchPages = async () => {
    const res = await fetch("http://localhost:5000/api/pages");

    if (!res.ok) {
        throw new Error("Failed to fetch pages");
    }

    const data = await res.json();
    return data.pages || [];
};
