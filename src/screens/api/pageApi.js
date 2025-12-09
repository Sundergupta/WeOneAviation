// src/api/pageApi.js

const API_URL = "http://localhost:5000/api/pages";

// 1. Get all pages
export const fetchPages = async () => {
    const res = await fetch(API_URL);

    if (!res.ok) {
        throw new Error("Failed to fetch pages");
    }

    const data = await res.json();
    return data.pages || [];
};

// 2. Add new page
export const addPage = async (pageData) => {
    const res = await fetch(`${API_URL}/add`, {  // important: /add
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(pageData),
    });

    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.message || "Failed to add page");
    }

    return data;
};

// 3. Get page by ID
export const fetchPageById = async (id) => {
    const res = await fetch(`${API_URL}/${id}`);

    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.message || "Page not found");
    }

    return data.page;
};

// ⭐ 4. Get page by SLUG (for Dynamic Pages)
export const fetchPageBySlug = async (slug) => {
    const res = await fetch(`${API_URL}/slug/${slug}`);

    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.message || "Page not found");
    }

    return data.page;
};

// 5. Update page
export const updatePage = async (id, pageData) => {
    const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(pageData),
    });

    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.message || "Failed to update page");
    }

    return data.page;
};

// 6. Delete page
export const deletePage = async (id) => {
    const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
    });

    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.message || "Failed to delete page");
    }

    return data;
};
