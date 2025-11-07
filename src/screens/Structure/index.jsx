import React from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import "./style.css";

const StructurePage = ({ data }) => {
    const location = useLocation();
    const { hero, menuItems, sections } = data;

    return (
        <div className="dynamic-page">
            {/* ✅ Hero Section */}
            <section
                className="hero-section"
                style={{ backgroundImage: `url(${hero.background})` }}
            >
                <div className="hero-container">
                    <h1>{hero.title}</h1>
                    <h2>{hero.subtitle}</h2>
                </div>
            </section>

            {/* ✅ Page Layout */}
            <div className="container two-column">
                {/* Sidebar */}
                <aside className="side-menu">
                    <ul>
                        {menuItems.map((item, i) => (
                            <li key={i}>
                                <Link
                                    to={item.path}
                                    className={
                                        location.pathname === item.path ? "active" : ""
                                    }
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* Main Content */}
                <main className="page-content">
                    {location.pathname === hero.basePath ? (
                        <>
                            {sections.map((section, i) => (
                                <section key={i} className="content-section">
                                    <h3>{section.title}</h3>
                                    {section.paragraphs &&
                                        section.paragraphs.map((p, idx) => (
                                            <p key={idx}>{p}</p>
                                        ))}
                                    {section.list && (
                                        <ul>
                                            {section.list.map((item, idx) => (
                                                <li key={idx}>
                                                    <strong>{item.title}</strong> — {item.text}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </section>
                            ))}
                        </>
                    ) : (
                        <Outlet />
                    )}
                </main>
            </div>
        </div>
    );
};

export default StructurePage;
