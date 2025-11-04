import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";
import airplane from '../../assets/home page slider/generate a videos of airplane.jpg';


const Salary = () => {
    const location = useLocation();
    const [activeComponent, setActiveComponent] = useState("salary");

    const menuItems = [
        { name: "Commercial Pilot License ", path: "../CommercialPilotLicense" },
        { name: "Commercial Pilot License Eligibility", path: "../commercial-pilot-license-eligibility" },
        { name: "Commercial Pilot License Syllabus ", path: "../commercial-pilot-license-syllabus" },
        { name: "Commercial Pilot License Salary ", path: "../commercial-pilot-license-salary" },
        { name: "Commercial Pilot License Admission", path: "../commercial-pilot-license-admission-process" },
    ];

    return (
        <div className="salary-page">
            {/* ---------------- HEADER ---------------- */}
            {/* Hero Section */}
            <section className="hero-section" style={{ backgroundImage: `url(${airplane})` }}>
                <div className="container">
                    <h1>Commercial Pilot Course Detail</h1>
                    <h2>Commercial Pilot License</h2>

                </div>
            </section>


            {/* ---------------- MAIN LAYOUT ---------------- */}
            <div className="cpl-content-wrapper">
                {/* Side Menu (Left) */}
                <div className="side-menu-column">
                    <ul className="side-menu">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    to={item.path}
                                    className={
                                        location.pathname === item.path
                                            ? "menu-link active"
                                            : "menu-link"
                                    }
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Main Content (Right) */}
                <div className="salary-container">
                    <section className="cpl-section">
                        <h1>Commercial Pilot License (CPL) Salary - 2025</h1>
                        <p>
                            Thousands of aspiring aviators wonder about the Commercial Pilot License (CPL)
                            salary levels in India compared to other countries. Earning a CPL brings not only
                            flight experience but also a rewarding and well-paid career.
                        </p>
                        <p>
                            CPL salaries depend on flight experience, the type of aircraft flown, and the airline
                            one works for. Below is a detailed overview of salary opportunities for CPL holders.
                        </p>
                    </section>

                    <section className="cpl-section">
                        <h2>What is a Commercial Pilot License Salary?</h2>
                        <p>
                            After obtaining a CPL through training and certification, pilots start earning a commercial
                            pilot salary that varies by position, airline, and experience level.
                        </p>
                        <button className="join-btn">Limited Seat - Join Now</button>
                    </section>

                    <section className="cpl-section">
                        <h2>Entry-Level Commercial Pilot Salary in India</h2>
                        <p>
                            Fresh CPL holders begin their careers as First Officers or Co-Pilots.
                            Entry-level salaries typically range between <strong>₹1.5 to ₹3 lakhs per month</strong>,
                            depending on the airline and location. Regional carriers may offer slightly lower pay
                            initially until pilots gain experience and flight hours.
                        </p>
                    </section>

                    <section className="cpl-section">
                        <h2>Experienced Commercial Pilot Salary</h2>
                        <p>
                            With growing experience, pilots advance to the position of Captain.
                            Captains at top domestic airlines in India earn between
                            <strong> ₹6 to ₹10 lakhs per month</strong>.
                            Pilots on international routes often earn even more.
                        </p>
                    </section>

                    <section className="cpl-section">
                        <h2>Factors Influencing Commercial Pilot Salary</h2>
                        <ul>
                            <li><strong>Airline Type:</strong> Domestic airlines usually pay less than international carriers.</li>
                            <li><strong>Aircraft Type:</strong> Wide-body aircraft pilots earn higher salaries.</li>
                            <li><strong>Experience Level:</strong> Salary increases as flight hours and experience grow.</li>
                            <li><strong>Location:</strong> Pilots in regions like the Middle East or Europe earn more.</li>
                            <li><strong>Additional Roles:</strong> Trainers and examiners earn bonuses and allowances.</li>
                        </ul>
                    </section>

                    <section className="cpl-section">
                        <h2>Commercial Pilot Salary Abroad</h2>
                        <p>
                            International CPL holders can expect monthly salaries between
                            <strong> USD 4,000 – 8,000</strong> for entry-level pilots and
                            <strong> USD 10,000 – 20,000</strong> for experienced captains,
                            depending on country and aircraft type.
                        </p>
                    </section>

                    <section className="cpl-section cpl-final">
                        <h2>Additional Benefits</h2>
                        <ul>
                            <li>Health and life insurance</li>
                            <li>Travel perks for family</li>
                            <li>Accommodation or housing allowance</li>
                            <li>Retirement and pension plans</li>
                            <li>Training and upskilling opportunities</li>
                        </ul>
                        <p className="final-text">
                            A commercial pilot’s salary is among the highest-paying careers in aviation.
                            With global travel perks and career flexibility, the investment in pilot training
                            pays off both financially and personally.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Salary;
