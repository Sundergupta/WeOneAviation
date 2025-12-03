import React from "react";
import "./style.css";

const StructurePage = ({ data }) => {
    const tableData = [
        { name: "Pilot training in India", link: "/pilot-training-in-india" },
        { name: "Pilot training in Hyderabad", link: "/pilot-training-in-hyderabad" },
        { name: "Pilot training in Mumbai", link: "/pilot-training-in-mumbai" },
        { name: "Pilot Training in Chennai", link: "/pilot-training-in-chennai" },
        { name: "Pilot Training in Bangalore", link: "/pilot-training-in-bangalore" },
        { name: "Pilot training in Kerala", link: "/pilot-training-in-kerala" },
        { name: "Pilot training in Delhi", link: "/pilot-training-in-delhi" },
        { name: "Pilot Training in Pune", link: "/pilot-training-in-pune" },
        { name: "Pilot training institute in Kolkata", link: "/pilot-training-in-kolkata" },
        { name: "Pilot training in Coimbatore", link: "/pilot-training-in-coimbatore" },
        { name: "Pilot training in Gujarat", link: "/pilot-training-in-gujarat" },
        { name: "Pilot training in Goa", link: "/pilot-training-in-goa" },
        { name: "Pilot Training in Gurugram", link: "/pilot-training-in-gurugram" },
        { name: "Pilot training in Tamil Nadu", link: "/pilot-training-in-tamil-nadu" },
        { name: "Pilot Training in Rajasthan", link: "/pilot-training-in-rajasthan" },
        { name: "Pilot Training in Haryana", link: "/pilot-training-in-haryana" },
        { name: "Pilot Training in Punjab", link: "/pilot-training-in-punjab" },
        { name: "Pilot Training in Andhra Pradesh", link: "/pilot-training-in-andhra-pradesh" },
        { name: "Pilot Training in Arunachal Pradesh", link: "/pilot-training-in-arunachal-pradesh" },
        { name: "Pilot training in Assam", link: "/pilot-training-in-assam" },
        { name: "Pilot Training in Bihar", link: "/pilot-training-in-bihar" },
        { name: "Pilot Training in Chhattisgarh", link: "/pilot-training-in-chhattisgarh" },
        { name: "Pilot Training in Himachal Pradesh", link: "/pilot-training-in-himachal-pradesh" },
        { name: "Pilot Training in Noida", link: "/pilot-training-in-noida" },
        { name: "Pilot Training in Ghaziabad", link: "/pilot-training-in-ghaziabad" },
        { name: "Pilot Training in Nagpur", link: "/pilot-training-in-nagpur" },
        { name: "Pilot Training in Maharashtra", link: "/pilot-training-in-maharashtra" },
        { name: "Pilot Training in Jaipur", link: "/pilot-training-in-jaipur" },
    ];


    if (!data) {
        return <p style={{ textAlign: "center", padding: "2rem" }}>No data available</p>;
    }

    return (
        <div className="page-container">
            {/* Hero Section */}
            <div
                className="hero-section"
                style={{
                    backgroundImage: `url(${data.hero.background || ""})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    padding: "50px 20px",
                    color: "#000000ff",
                    textAlign: "center",
                }}
            >
                <h1 className="page-title">{data.hero.title}</h1>
                <p className="page-subtitle">{data.hero.subtitle}</p>
            </div>

            {/* Two-Column Layout */}
            <div className="main-layout">
                {/* Left Side (Pilot Training Centers List) */}
                <aside className="menu-section">
                    <h3>Pilot Training States</h3>
                    <ul className="menu-list">
                        {tableData.map((item, index) => (
                            <li key={index}>
                                <a href={item.link} rel="noopener noreferrer">
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* Right Side (Main Data) */}
                <div className="content-section">
                    {data.sections.map((section, index) => (
                        <div key={index} className="section-block">
                            <h2>{section.title}</h2>
                            {section.paragraphs.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}
                            <ul>
                                {section.list.map((listItem, i) => (
                                    <li key={i}>
                                        <strong>{listItem.title}:</strong> {listItem.text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StructurePage;
