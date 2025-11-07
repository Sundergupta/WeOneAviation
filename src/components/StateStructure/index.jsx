import React from "react";
import "./style.css";

const tableData = [
    { name: "Pilot training in India", count: 3600, link: "https://www.weoneaviation.in/pilot-training-in-india" },
    { name: "Pilot training in Hyderabad", count: 2900, link: "https://www.weoneaviation.in/pilot-training-in-hyderabad" },
    { name: "Pilot training in Mumbai", count: 1600, link: "https://www.weoneaviation.in/pilot-training-in-mumbai" },
    { name: "Pilot Training in Chennai", count: 1300, link: "https://www.weoneaviation.in/pilot-training-in-chennai" },
    { name: "Pilot Training in Bangalore", count: 1300, link: "https://www.weoneaviation.in/pilot-training-in-bangalore" },
    { name: "Pilot training in Kerala", count: 720, link: "https://www.weoneaviation.in/pilot-training-in-kerala" },
    { name: "Pilot training in Delhi", count: 720, link: "https://www.weoneaviation.in/pilot-training-in-delhi" },
    { name: "Pilot Training in Pune", count: 590, link: "https://www.weoneaviation.in/pilot-training-in-pune" },
    { name: "Pilot training institute in Kolkata", count: 320, link: "https://www.weoneaviation.in/pilot-training-in-kolkata" },
    { name: "Pilot training in Coimbatore", count: 170, link: "https://www.weoneaviation.in/pilot-training-in-coimbatore" },
    { name: "Pilot training in Gujarat", count: 50, link: "https://www.weoneaviation.in/pilot-training-in-gujarat" },
    { name: "Pilot training in Goa", count: 30, link: "https://www.weoneaviation.in/pilot-training-in-goa" },
    { name: "Pilot Training in Gurgaon", count: 20, link: "https://www.weoneaviation.in/pilot-training-in-gurugram" },
    { name: "Pilot training in Tamil Nadu", count: 10, link: "https://www.weoneaviation.in/pilot-training-in-tamil-nadu" },
    { name: "Pilot Training in Rajasthan", count: 10, link: "https://www.weoneaviation.in/pilot-training-in-rajasthan" },
    { name: "Pilot Training in Haryana", count: "", link: "https://www.weoneaviation.in/pilot-training-in-haryana" },
    { name: "Pilot Training in Punjab", count: "", link: "https://www.weoneaviation.in/pilot-training-in-punjab" },
    { name: "Pilot Training in Andhra Pradesh", count: "", link: "https://www.weoneaviation.in/pilot-training-in-andhra-pradesh" },
    { name: "Pilot Training in Arunachal Pradesh", count: "", link: "https://www.weoneaviation.in/pilot-training-in-arunachal-pradesh" },
    { name: "Pilot training in Assam", count: "", link: "https://www.weoneaviation.in/pilot-training-in-assam" },
    { name: "Pilot Training in Bihar", count: "", link: "https://www.weoneaviation.in/pilot-training-in-bihar" },
    { name: "Pilot Training in Chhattisgarh", count: "", link: "https://www.weoneaviation.in/pilot-training-in-chhattisgarh" },
    { name: "Pilot Training in Himachal Pradesh", count: "", link: "https://www.weoneaviation.in/pilot-training-in-himachal-pradesh" },
    { name: "Pilot Training in Noida", count: "", link: "https://www.weoneaviation.in/pilot-training-in-noida" },
    { name: "Pilot Training in Ghaziabad", count: "", link: "https://www.weoneaviation.in/pilot-training-in-ghaziabad" },
    { name: "Pilot Training in Nagpur", count: 50, link: "https://www.weoneaviation.in/pilot-training-in-nagpur" },
    { name: "Pilot Training in Maharashtra", count: 110, link: "https://www.weoneaviation.in/pilot-training-in-maharashtra" },
    { name: "Pilot Training in Jaipur", count: 20, link: "https://www.weoneaviation.in/pilot-training-in-jaipur" },
];

const StructurePage = () => {
    return (
        <div className="page-container">
            <br />
            <br />
            {/* Page Title */}
            <h1 className="page-title">Pilot Training Centers in India</h1>

            {/* Layout Wrapper */}
            <div className="content-wrapper">
                {/* Table Section */}
                <div className="table-section">
                    <h3>Current Pilot Training Centers</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Location</th>
                                <th>Count</th>
                                <th>Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((item, index) => (
                                <tr key={index} onClick={() => window.open(item.link, "_blank")}>
                                    <td>{item.name}</td>
                                    <td>{item.count || "-"}</td>
                                    <td className="visit-link">Visit</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Text Section */}
                <div className="content-section">
                    <h2>Pilot Training Across India</h2>
                    <p>
                        Our aviation training network is expanding across India, offering comprehensive pilot programs
                        with advanced aircraft, simulators, and certified instructors. Explore opportunities near your
                        city and begin your journey toward becoming a professional pilot today.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default StructurePage;
