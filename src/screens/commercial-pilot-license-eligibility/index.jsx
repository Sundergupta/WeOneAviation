import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";
import airplane from '../../assets/home page slider/generate a videos of airplane.jpg';
import { ScrollRestoration } from "react-router-dom";

const CommercialPilotLicense = () => {
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
                    <h1>Commercial Pilot License Eligibility  </h1>
                    <h2>Commercial Pilot License</h2>

                </div>
            </section>

            {/* <header className="cpl-header">
                <h1>Commercial Pilot License (CPL) Eligibility</h1>
                <p>
                    A clear, step-by-step overview of the eligibility requirements to pursue a CPL in India.
                </p>
            </header> */}

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
                        <h1>Commercial Pilot License (CPL) Eligibility</h1>
                        <p>
                            The first essential step for someone who dreams about aviation as a profession is to earn a
                            <strong> Commercial Pilot License (CPL)</strong>. The CPL enables professional aircraft operation
                            and provides entry into airline, charter company, and cargo service roles. Before starting
                            a pilot training program, students need to understand the specifications that will determine
                            their admission.
                        </p>
                    </section>

                    <section className="cpl-section">
                        <h2>Age Requirement</h2>
                        <p>
                            A candidate qualifying for a CPL in India needs to reach <strong>17 years</strong> old before
                            applying for enrollment. The license processing begins at age 17 but the candidate will obtain
                            it after completing their 18th birthday.
                        </p>
                    </section>

                    <section className="cpl-section">
                        <h2>Educational Qualification</h2>
                        <p>
                            A solid academic base forms the essential foundation required to turn into a professional pilot.
                            The educational requirement begins at the <strong>10+2 (senior secondary)</strong> level alongside
                            science subjects according to set criteria.
                        </p>
                    </section>

                    <section className="cpl-section">
                        <h2>Medical Fitness</h2>
                        <p>
                            Each pilot candidate needs to obtain a medical certification from an examiner approved by the DGCA.
                            The medical certification includes:
                        </p>
                        <ul>
                            <li>Class 2 Medical Certificate (initial requirement for Student Pilot License)</li>
                            <li>Class 1 Medical Certificate (mandatory for CPL issuance)</li>
                        </ul>
                    </section>

                    <section className="cpl-section">
                        <h2>Language Proficiency</h2>
                        <p>
                            English proficiency stands as a mandatory requirement because aviation communication and documentation
                            operate in the English language. The DGCA potentially requires candidates to pass an English Language
                            Proficiency (ELP) test.
                        </p>
                    </section>

                    <section className="cpl-section">
                        <h2>Flying Hours</h2>
                        <p>
                            The CPL eligibility requires candidates to complete at least <strong>200 hours</strong> of flying:
                        </p>
                        <ul>
                            <li>100 hours as Pilot-in-Command (PIC)</li>
                            <li>20 hours of cross-country flying</li>
                            <li>10 hours of instrument flying</li>
                            <li>5 hours of night flying</li>
                        </ul>
                    </section>

                    <section className="cpl-section cpl-final">
                        <h2>Final Thoughts</h2>
                        <p>
                            Start a successful career in aviation with all the commercial pilot eligibility requirements.
                            Educational background, medical fitness, and language proficiency ensure high professional standards.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CommercialPilotLicense;
