import React from "react";
import "./style.css";

const DynamicPage = ({ data }) => {
    return (
        <div className="dynamic-page">
            {/* ---------------- HEADER ---------------- */}
            <br />
            {data.header && (
                <header className="dynamic-header">
                    <div className="header-overlay">
                        <h1>{data.header.title}</h1>
                        <p>{data.header.subtitle}</p>
                    </div>
                </header>
            )}

            {/* ---------------- MAIN CONTENT ---------------- */}
            <main className="dynamic-content">
                {data.sections &&
                    data.sections.map((section, index) => (
                        <section key={index} className="dynamic-section">
                            <h2>{section.title}</h2>

                            {/* Description */}
                            {section.description && <p>{section.description}</p>}

                            {/* Subsections */}
                            {section.subsections &&
                                section.subsections.map((sub, i) => (
                                    <div key={i} className="dynamic-subsection">
                                        {sub.heading && <h3>{sub.heading}</h3>}

                                        {/* List */}
                                        {sub.list && (
                                            <ul>
                                                {sub.list.map((item, j) => (
                                                    <li key={j}>{item}</li>
                                                ))}
                                            </ul>
                                        )}

                                        {/* Table */}
                                        {sub.table && (
                                            <table className="dynamic-table">
                                                <thead>
                                                    <tr>
                                                        {sub.table.headers.map((head, h) => (
                                                            <th key={h}>{head}</th>
                                                        ))}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {sub.table.rows.map((row, r) => (
                                                        <tr key={r}>
                                                            {row.map((cell, c) => (
                                                                <td key={c}>{cell}</td>
                                                            ))}
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        )}
                                    </div>
                                ))}
                        </section>
                    ))}
            </main>

            {/* ---------------- FOOTER ---------------- */}
            {data.footer && (
                <footer className="dynamic-footer">
                    <p>{data.footer.text}</p>
                </footer>
            )}
        </div>
    );
};

export default DynamicPage;
