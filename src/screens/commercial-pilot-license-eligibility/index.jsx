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
                    <h1>Commercial Pilot License Eligibility</h1>
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
                        <h1>Commercial Pilot License (CPL) Eligibility</h1>
                        <p>
                            The first essential step for someone who dreams about aviation as a profession is to earn a <strong>Commercial Pilot License (CPL)</strong>. The CPL enables professional aircraft operation although it provides entry into airline
                            and charter company and cargo service prestigious roles. Before starting a pilot training program
                            students need to understand the specifications that will determine their admission. Here’s a detailed
                            overview of the eligibility to become a pilot and apply for a commercial pilot licence course in India.
                        </p>
                    </section>

                    <section className="cpl-section">
                        <h2>Age Requirement</h2>
                        <p>
                            A candidate qualifying for a CPL in India needs to reach <strong>17 years</strong> old before applying for enrollment. The
                            license processing begins at age 17 but the candidate will obtain it after completing their 18th birthday.
                        </p>
                    </section>

                    <section className="cpl-section">
                        <h2>Educational Qualification</h2>
                        <p>
                            A solid academic base forms the essential foundation required to turn into a professional pilot. The
                            educational requirement begins at the <strong>10+2 (senior secondary)</strong> level alongside science subjects
                            according to set criteria.
                        </p>
                        <p><strong>10+2 (Senior Secondary) or equivalent</strong></p>
                        <p>It is mandatory to study Physics and Mathematics as your core subjects.</p>
                        <p>
                            Candidates who lack Physics and Math in their 10+2 education must separately take these courses
                            either through NIOS (National Institute of Open Schooling) or any authorized educational institution. The
                            standards for commercial pilot course eligibility require a specific academic background.
                        </p>
                    </section>

                    <section className="cpl-section">
                        <h2>Medical Fitness</h2>
                        <p>
                            High levels of physical along with mental fitness are required for safe aircraft operation. Each pilot
                            candidate needs to obtain a medical certification from an examiner approved by the DGCA. The medical
                            certification includes:
                        </p>
                        <ul>
                            <li>Class 2 Medical Certificate (initial requirement for Student Pilot License)</li>
                            <li>Class 1 Medical Certificate (mandatory for CPL issuance)</li>
                        </ul>
                        <p>The medical exam evaluates these specific elements:</p>
                        <ul>
                            <li>The vision standards require 6/6 vision in one eye and 6/9 vision in the other yet correctable with eyeglasses.</li>
                            <li>Hearing, blood pressure, ECG, and overall physical health</li>
                        </ul>
                    </section>

                    <section className="cpl-section">
                        <h2>Language Proficiency</h2>
                        <p>
                            English proficiency stands as a mandatory requirement because aviation communication and
                            documentation as well as all examination materials operate in the English language. The DGCA
                            potentially requires candidates to pass an English Language Proficiency (ELP) test.
                        </p>
                    </section>

                    <section className="cpl-section">
                        <h2>Nationality and Citizenship</h2>
                        <p>
                            The Indian authorities do not require any specific nationality from applicants seeking a CPL license.
                            Foreign nationals who seek a CPL in India must fulfill additional requirements which include getting
                            security clearance alongside the conversion of their licenses obtained from foreign training programs.
                        </p>
                    </section>

                    <section className="cpl-section">
                        <h2>Student Pilot License (SPL)</h2>
                        <p>
                            Candidates must first obtain a Student Pilot License (SPL) to enroll in the CPL program. The candidate
                            needs to fulfill three requirements to obtain an SPL.
                        </p>
                        <ul>
                            <li>Be at least 16 years old</li>
                            <li>Students must pass an oral/written examination on aviation subjects.</li>
                            <li>Pass a Class 2 medical exam</li>
                        </ul>
                        <p>Under this license students can start receiving supervised flying instruction for basic skills.</p>
                    </section>

                    <section className="cpl-section">
                        <h2>Flying Hours</h2>
                        <p>
                            The CPL eligibility requires candidates to complete at least <strong>200 hours</strong> of flying. These include:
                        </p>
                        <ul>
                            <li>100 hours as Pilot-in-Command (PIC)</li>
                            <li>20 hours of cross-country flying</li>
                            <li>10 hours of instrument flying</li>
                            <li>5 hours of night flying</li>
                        </ul>
                        <p>
                            Flying education must take place under DGCA-approved academic institutions which provide flight
                            instruction.
                        </p>
                    </section>

                    <section className="cpl-section cpl-final">
                        <h2>Final Thoughts</h2>
                        <p>
                            Start a successful career in aviation with meeting all the commercial pilot eligibility requirements. All
                            requirements including educational background coupled with medical fitness and language proficiency as
                            well as flying hours are specifically designed to establish the best possible safety and professional
                            standards.
                        </p>
                        <p>
                            With meeting all requirements coupled with dedication to aviation you will proceed successfully toward
                            obtaining your wings. Students should enroll in a respected flying school that holds DGCA approval
                            because it will support them throughout the SPL and CPL education journey.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default CommercialPilotLicense;
