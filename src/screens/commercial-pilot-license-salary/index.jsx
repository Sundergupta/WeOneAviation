import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";
import airplane from '../../assets/home page slider/generate a videos of airplane.jpg';
import { ScrollRestoration } from "react-router-dom";

const Salary = () => {
    const location = useLocation();
    const [activeComponent, setActiveComponent] = useState("salary");

    const menuItems = [
        { name: "Commercial Pilot License ", path: "../Commercial-Pilot-License" },
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
                    <h1>Commercial Pilot License Salary - 2025</h1>
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
                                <ScrollRestoration />
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Main Content (Right) */}
                <div className="salary-container">

                    <section className="cpl-section">
                        <h1>Commercial Pilot License Salary-2025</h1>
                        <p>
                            Thousands of aviators interested in pursuing flight careers ask about the Commercial pilot license salary
                            levels in India in comparison to foreign salaries. Getting your Commercial Pilot License (CPL) brings you
                            more than flight experience because it leads to a satisfying career as well as financial benefits.
                        </p>
                        <p>
                            Commercial pilot salary bases its amount on a combination of flight experience with the aircraft type and
                            airline partnership and geographic location. A comprehensive breakdown on this page explains the
                            earnings opportunities for CPL holders can be found here.
                        </p>
                    </section>

                    <section className="cpl-section">
                        <h2>What is a Commercial Pilot License Salary?</h2>
                        <p>
                            After getting their CPL through training and certification pilots can obtain their commercial pilot license
                            salary as monthly or yearly pay. Your career stage alongside your work location determines how much
                            your commercial pilot license salary will be.
                        </p>
                        <button className="join-btn">Limited Seat - Join Now</button>
                    </section>

                    <section className="cpl-section">
                        <h2>Entry-Level Commercial Pilot Salary in India</h2>
                        <p>
                            A valid Commercial Pilot License allows freshers to begin their aviation career by piloting as First Officer
                            or Co-Pilot. The typical salary for commercial pilots in India with their license that maintains an average
                            range between INR 1.5 to 3 lakhs per month in their first role. The starting salary paid by regional airlines
                            and charter companies is normally lower than the standard amount until pilots build their skills through
                            flying experience.
                        </p>
                    </section>

                    <section className="cpl-section">
                        <h2>Experienced Commercial Pilot Salary</h2>
                        <p>
                            Flight experience alongside collecting sufficient flight hours enables pilots to advance their position to
                            Captain. A Captain employed at a leading domestic Indian airline receives a monthly salary between INR
                            6 to 10 lakhs. The salary earnings for international routes and world-class carriers typically exceed the
                            pay of domestic routes.
                        </p>
                    </section>

                    <section className="cpl-section">
                        <h2>Factors Influencing Commercial Pilot License Salary</h2>
                        <ul>
                            <li><strong>Airline Type:</strong> Pilots working for domestic airlines receive lower pay rates than those employed by international airlines.</li>
                            <li><strong>Aircraft Type:</strong> Pilots operate wide-body jets (Boeing 777 or Airbus A350) which generates a higher salary compared to pilots who operate smaller aircraft.</li>
                            <li><strong>Experience Level:</strong> A pilot’s salary grows as their flight hours increase together with their professional experience.</li>
                            <li><strong>Location:</strong> Pilots who fly for Middle Eastern or Southeast Asian or European airlines tend to receive bigger salary packages than their Indian counterparts.</li>
                            <li><strong>Additional Roles:</strong> Training captains and instructors along with examiners may receive performance-based bonuses and additional payments through allowances.</li>
                        </ul>
                    </section>

                    <section className="cpl-section">
                        <h2>Commercial Pilot Salary Abroad</h2>
                        <p>
                            Commercial pilot license salaries are high in the USA and Australia as well as the UAE and Singapore.
                            Newbie pilots typically receive pay between USD 4,000 and 8,000 each month yet captains with many
                            years of experience can earn from USD 10,000 to 20,000 and beyond according to their aircraft
                            assignments and workplace.
                        </p>
                    </section>

                    <section className="cpl-section cpl-final">
                        <h2>Additional Benefits</h2>
                        <ul>
                            <li>Health and life insurance</li>
                            <li>Travel perks for family</li>
                            <li>Housing or accommodation allowance</li>
                            <li>Retirement and pension plans</li>
                            <li>Training and upskilling opportunities</li>
                        </ul>
                        <p>
                            A commercial pilot license salary offers among the highest professional compensation because it
                            provides exciting travel benefits along with elevated status and employment flexibility across different
                            countries. The sizeable investment in pilot training yields equal benefits to the pilot. Acquiring a CPL
                            enables you to pursue flights either within India’s borders or internationally thereby establishing a stable
                            career with exciting opportunities.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default Salary;
