import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Admin() {
    const [activeTab, setActiveTab] = useState("pages");

    return (
        <div className="admin-container">
            <h1 className="admin-title">YourAdmin</h1>

            {/* Navigation */}
            <div className="admin-links">
                <Link to="/pages">📄 Pages</Link>
                <Link to="/add-page">➕ Add New Page</Link>
            </div>

            {/* Tabs */}
            <div className="admin-tabs">
                <button
                    className={activeTab === "pages" ? "active-tab" : ""}
                    onClick={() => setActiveTab("pages")}
                >
                    Pages
                </button>

                <button
                    className={activeTab === "code" ? "active-tab" : ""}
                    onClick={() => setActiveTab("code")}
                >
                    Code
                </button>

                <button
                    className={activeTab === "content" ? "active-tab" : ""}
                    onClick={() => setActiveTab("content")}
                >
                    Content
                </button>
            </div>

            {/* Search & Button */}
            <div className="top-bar">
                <input type="text" placeholder="Search…" className="search-input" />
                <button className="new-btn">+ New</button>
            </div>

            {/* Content Box */}
            <div className="content-box">
                <textarea placeholder="Write your content here..."></textarea>
            </div>
        </div>
    );
}
