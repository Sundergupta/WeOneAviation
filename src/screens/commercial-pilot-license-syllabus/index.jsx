import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";
import airplane from '../../assets/home page slider/generate a videos of airplane.jpg';
import { ScrollRestoration } from "react-router-dom";

const syllabus = () => {
    const location = useLocation();

    const menuItems = [
        { name: "Commercial Pilot License ", path: "../Commercial-Pilot-License" },
        { name: "Commercial Pilot License Eligibility", path: "../commercial-pilot-license-eligibility" },
        { name: "Commercial Pilot License Syllabus ", path: "../commercial-pilot-license-syllabus" },
        { name: "Commercial Pilot License Salary ", path: "../commercial-pilot-license-salary" },
        { name: "Commercial Pilot License Admission", path: "../commercial-pilot-license-admission-process" },
    ];
    return (
        <div className="commercial-pilot-license">
            {/* ---------------- HEADER ---------------- */}

            {/* Hero Section */}
            <section className="hero-section" style={{ backgroundImage: `url(${airplane})` }}>
                <div className="container">
                    <h1>Commercial Pilot License Syllabus </h1>
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
                <div className="cpl-container">
                    <section className="cpl-section">
                        <h1>Commercial Pilot License (CPL) Syllabus</h1>
                        <p>
                            A commercial pilot license syllabus is designed to equip aspiring pilots with the essential
                            theoretical knowledge and practical flying skills required for safe and proficient aircraft
                            operation. This program meets the DGCA (Directorate General of Civil Aviation) standards by
                            combining ground instruction with hands-on flight training. The sections below outline the
                            detailed structure of the CPL syllabus in India.
                        </p>
                    </section>

                    <section className="cpl-section">
                        <h2>Ground Training Subjects</h2>
                        <p>
                            Theoretical learning at ground school is the foundation of pilot training. The commercial pilot
                            license syllabus includes the following ground school subjects:
                        </p>
                        <ul>
                            <li>
                                <strong>Air Navigation:</strong> Covers flight planning, radio navigation, instrument flying,
                                and GPS systems.
                            </li>
                            <li>
                                <strong>Aviation Meteorology:</strong> Focuses on weather patterns, cloud formations, and wind
                                systems that affect flight.
                            </li>
                            <li>
                                <strong>Air Regulation:</strong> Provides understanding of DGCA and ICAO aviation laws and rules.
                            </li>
                            <li>
                                <strong>Technical General:</strong> Explains aircraft systems, engines, and instruments.
                            </li>
                            <li>
                                <strong>Technical Specific:</strong> Training on the aircraft type used during flight education.
                            </li>
                            <li>
                                <strong>Radio Telephony (RTR):</strong> Teaches aviation communication, standard phraseology,
                                and emergency procedures.
                            </li>
                        </ul>
                        <p>
                            Instructors use classroom sessions, online learning, and mock tests to help students prepare for
                            DGCA examinations effectively.
                        </p>
                    </section>

                    <section className="cpl-section">
                        <h2>Flight Training Modules</h2>
                        <p>
                            In addition to theory, students must complete hands-on flight training as part of the CPL syllabus:
                        </p>
                        <ul>
                            <li>
                                <strong>Basic Maneuvers:</strong> Take-off, landing, straight-and-level flight, turns, climbs,
                                and descents.
                            </li>
                            <li>
                                <strong>Cross-Country Flights:</strong> Navigation exercises between various airfields.
                            </li>
                            <li>
                                <strong>Instrument Flying:</strong> Flying solely using instruments to simulate low-visibility
                                situations.
                            </li>
                            <li>
                                <strong>Night Flying:</strong> Training for flight operations during nighttime.
                            </li>
                            <li>
                                <strong>Solo Flying:</strong> Independent flight sessions to build confidence and control.
                            </li>
                        </ul>
                        <p>
                            Students must log a minimum of <strong>200 hours of flight training</strong>, which includes solo,
                            cross-country, and instrument flight requirements.
                        </p>
                    </section>

                    <section className="cpl-section cpl-final">
                        <h2>Final Thoughts</h2>
                        <p>
                            The commercial pilot license syllabus is a comprehensive program crafted to produce skilled,
                            competent, and confident pilots. With a strong balance between theory and flight practice, it
                            ensures students are fully prepared for real-world aviation challenges, varied climatic
                            conditions, and airline operations.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default syllabus;
