import React from "react";
import "./style.css";

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
