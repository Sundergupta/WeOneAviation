import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

import airplane from '../../assets/home page slider/generate a videos of airplane.jpg';


const admission = () => {
    const location = useLocation();

    const menuItems = [
        { name: "Commercial Pilot License ", path: "../CommercialPilotLicense" },
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
                <div className="cpl-container">
                    <section className="cpl-section">
                        <h1>Commercial Pilot License (CPL) Admission Process</h1>
                        <p>
                            Dreaming of a career in aviation? The Commercial Pilot License (CPL) admission journey begins
                            with understanding all process requirements. The admission process checks eligibility, aptitude,
                            and readiness to start professional pilot training. Each phase of CPL qualification and training
                            is governed by the <strong>Directorate General of Civil Aviation (DGCA)</strong> in India.
                        </p>
                        <p>
                            The following guide provides detailed insights into the CPL training application procedures and
                            start-up instructions for aspiring pilots.
                        </p>
                    </section>

                    <section className="cpl-section">
                        <h2>Check Eligibility Requirements</h2>
                        <p>Before applying, ensure you meet the following eligibility standards:</p>
                        <ul>
                            <li><strong>Age:</strong> Training can start at age 17, but the license is issued at age 18.</li>
                            <li>
                                <strong>Education:</strong> Completion of 10+2 (Physics and Mathematics) from a recognized board.
                            </li>
                            <li>
                                <strong>Medical Fitness:</strong> Obtain a <strong>Class 2</strong> and then a <strong>Class 1</strong>
                                Medical Certificate from DGCA-approved examiners.
                            </li>
                            <li><strong>English Proficiency:</strong> Ability to read, write, and understand English fluently.</li>
                        </ul>
                        <p>
                            Meeting these initial requirements forms the foundation for your CPL admission process.
                        </p>
                    </section>

                    <section className="cpl-section">
                        <h2>Choose a DGCA-Approved Flying School</h2>
                        <p>
                            Selecting the right training institution is a crucial step. Choose a flying school that:
                        </p>
                        <ul>
                            <li>Is approved by the DGCA</li>
                            <li>Has experienced instructors</li>
                            <li>Provides modern aircraft and simulators</li>
                            <li>Offers complete ground and flight training</li>
                        </ul>
                        <p>
                            After selecting your school, complete the enrollment form, submit required documents, and pay
                            the initial admission fees.
                        </p>
                    </section>

                    <section className="cpl-section">
                        <h2>Ground School & DGCA Exams</h2>
                        <p>
                            Students must study and pass core ground subjects such as:
                        </p>
                        <ul>
                            <li>Air Navigation</li>
                            <li>Aviation Meteorology</li>
                            <li>Air Regulations</li>
                            <li>Technical General</li>
                            <li>Technical Specific</li>
                        </ul>
                        <p>
                            Candidates are required to clear DGCA examinations in these subjects before progressing further
                            in their training.
                        </p>
                    </section>

                    <section className="cpl-section">
                        <h2>Flight Training & Logging Flying Hours</h2>
                        <p>
                            Students must complete <strong>200 hours of flight training</strong>, which includes:
                        </p>
                        <ul>
                            <li>Solo flights</li>
                            <li>Cross-country flights</li>
                            <li>Instrument flights</li>
                            <li>Night flights</li>
                        </ul>
                        <p>
                            Each flight is recorded in the student’s logbook, which serves as official proof for CPL
                            certification.
                        </p>
                    </section>

                    <section className="cpl-section">
                        <h2>Apply for Commercial Pilot License</h2>
                        <p>
                            After successfully passing all DGCA exams and completing your required flight hours:
                        </p>
                        <ul>
                            <li>Submit your logbook and supporting documents to DGCA</li>
                            <li>Undergo Class 1 medical revalidation</li>
                            <li>Apply for official CPL issuance</li>
                        </ul>
                    </section>

                    <section className="cpl-section">
                        <h2>Admission Procedure at We One Aviation Academy</h2>
                        <p>
                            We One Aviation Academy ensures a student-friendly and transparent admission process for CPL
                            enrollment. The steps include:
                        </p>
                        <ul>
                            <li><strong>Initial Counseling:</strong> Understanding student goals and eligibility assessment.</li>
                            <li><strong>Document Verification:</strong> Checking academic and medical records.</li>
                            <li><strong>Application Submission:</strong> Completing the CPL admission form with required details.</li>
                            <li><strong>Medical Support:</strong> Assistance with scheduling Class 2 and Class 1 medicals.</li>
                            <li><strong>Orientation & Enrollment:</strong> Candidates attend an introductory orientation session before ground training.</li>
                            <li><strong>Loan & EMI Assistance:</strong> Financial aid and EMI support options available for eligible students.</li>
                        </ul>
                        <p>
                            From counseling to final flight tests, We One Aviation provides guidance throughout the complete
                            pilot training journey.
                        </p>
                    </section>

                    <section className="cpl-section cpl-final">
                        <h2>Final Thoughts</h2>
                        <p>
                            The Commercial Pilot License Admission Process involves several crucial stages that ensure only
                            qualified and committed individuals enter the aviation field. Meeting eligibility criteria,
                            choosing the right school, and completing all DGCA requirements are key steps toward achieving
                            your dream of becoming a professional pilot.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default admission;
