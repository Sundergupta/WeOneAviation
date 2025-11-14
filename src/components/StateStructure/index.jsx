import React from "react";
import "./style.css";

const StructurePage = ({ data }) => {
    const tableData = [
        { name: "Pilot training in India", link: "https://www.weoneaviation.in/pilot-training-in-india" },
        { name: "Pilot training in Hyderabad", link: "https://www.weoneaviation.in/pilot-training-in-hyderabad" },
        { name: "Pilot training in Mumbai", link: "https://www.weoneaviation.in/pilot-training-in-mumbai" },
        { name: "Pilot Training in Chennai", link: "https://www.weoneaviation.in/pilot-training-in-chennai" },
        { name: "Pilot Training in Bangalore", link: "https://www.weoneaviation.in/pilot-training-in-bangalore" },
        { name: "Pilot training in Kerala", link: "https://www.weoneaviation.in/pilot-training-in-kerala" },
        { name: "Pilot training in Delhi", link: "https://www.weoneaviation.in/pilot-training-in-delhi" },
        { name: "Pilot Training in Pune", link: "https://www.weoneaviation.in/pilot-training-in-pune" },
        { name: "Pilot training institute in Kolkata", link: "https://www.weoneaviation.in/pilot-training-in-kolkata" },
        { name: "Pilot training in Coimbatore", link: "https://www.weoneaviation.in/pilot-training-in-coimbatore" },
        { name: "Pilot training in Gujarat", link: "https://www.weoneaviation.in/pilot-training-in-gujarat" },
        { name: "Pilot training in Goa", link: "https://www.weoneaviation.in/pilot-training-in-goa" },
        { name: "Pilot Training in Gurgaon", link: "https://www.weoneaviation.in/pilot-training-in-gurugram" },
        { name: "Pilot training in Tamil Nadu", link: "https://www.weoneaviation.in/pilot-training-in-tamil-nadu" },
        { name: "Pilot Training in Rajasthan", link: "https://www.weoneaviation.in/pilot-training-in-rajasthan" },
        { name: "Pilot Training in Haryana", link: "https://www.weoneaviation.in/pilot-training-in-haryana" },
        { name: "Pilot Training in Punjab", link: "https://www.weoneaviation.in/pilot-training-in-punjab" },
        { name: "Pilot Training in Andhra Pradesh", link: "https://www.weoneaviation.in/pilot-training-in-andhra-pradesh" },
        { name: "Pilot Training in Arunachal Pradesh", link: "https://www.weoneaviation.in/pilot-training-in-arunachal-pradesh" },
        { name: "Pilot training in Assam", link: "https://www.weoneaviation.in/pilot-training-in-assam" },
        { name: "Pilot Training in Bihar", link: "https://www.weoneaviation.in/pilot-training-in-bihar" },
        { name: "Pilot Training in Chhattisgarh", link: "https://www.weoneaviation.in/pilot-training-in-chhattisgarh" },
        { name: "Pilot Training in Himachal Pradesh", link: "https://www.weoneaviation.in/pilot-training-in-himachal-pradesh" },
        { name: "Pilot Training in Noida", link: "https://www.weoneaviation.in/pilot-training-in-noida" },
        { name: "Pilot Training in Ghaziabad", link: "https://www.weoneaviation.in/pilot-training-in-ghaziabad" },
        { name: "Pilot Training in Nagpur", link: "https://www.weoneaviation.in/pilot-training-in-nagpur" },
        { name: "Pilot Training in Maharashtra", link: "https://www.weoneaviation.in/pilot-training-in-maharashtra" },
        { name: "Pilot Training in Jaipur", link: "https://www.weoneaviation.in/pilot-training-in-jaipur" },
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
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
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
