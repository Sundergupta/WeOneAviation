import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

import airplane from '../../assets/home page slider/generate a videos of airplane.jpg';

const admission = () => {
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
                    <h1>Commercial Pilot License Admission Process</h1>
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
                        <h1>Commercial Pilot License Admission Process</h1>
                        <p>
                            Dreaming of a career in aviation? The Commercial Pilot License Admission journey begins with pilots
                            understanding all process requirements. The admission process checks eligibility and aptitude alongside
                            readiness to start professional pilot training. Each phase of Commercial Pilot License qualification and
                            learning to fly alone without an instructor receives strict guidelines from the DGCA (Directorate General
                            of Civil Aviation) in India.
                        </p>
                        <p>
                            The following guide provides you with details on CPL training application procedures and start-up
                            instructions.
                        </p>
                    </section>

                    <section className="cpl-section">
                        <h2>Contact Now</h2>
                    </section>

                    <section className="cpl-section">
                        <h2>Check Eligibility Requirements</h2>
                        <p>Make sure you fulfill all eligibility standards before starting your application:</p>
                        <ul>
                            <li>Age: Training for the license starts at age 17 but the license is issued at age 18.</li>
                            <li>Education: Students need to complete their 10+2 by obtaining Physics and Mathematics from a recognized board.</li>
                            <li>Medical Fitness: Applicants must get their Class 2 followed by class 1 Medical Certificates from medical examiners recognized by DGCA.</li>
                            <li>English Proficiency: Must be able to read, write, and understand English.</li>
                        </ul>
                        <p>The initial requirement stands as the core element of Commercial Pilot License Admission Process initiation.</p>
                    </section>

                    <section className="cpl-section">
                        <h2>Choose a DGCA-Approved Flying School</h2>
                        <p>Choosing the correct training institution stands as a vital component throughout the Commercial Pilot License Admission Process. Look for a school that:</p>
                        <ul>
                            <li>Is approved by the DGCA</li>
                            <li>Has experienced instructors</li>
                            <li>Offers modern aircraft and simulators</li>
                            <li>Provides complete ground and flight training</li>
                        </ul>
                        <p>After selection you must fill out the school’s enrollment form while providing documents and making your first fee payment.</p>
                    </section>

                    <section className="cpl-section">
                        <h2>Ground School & DGCA Exams</h2>
                        <p>Students must study core subjects Air Navigation together with Meteorology, Air Regulations, Technical General and Technical Specific at ground school training. Candidates need to clear exams conducted by DGCA concerning these subjects before their training progression.</p>
                    </section>

                    <section className="cpl-section">
                        <h2>Flight Training & Logging Flying Hours</h2>
                        <p>You need to meet the requirement of 200 flight hours which includes solo flights, cross-country flights, instrument flights, and night flights. The logbook contains essential training information that serves as a basis for CPL certificate issuance.</p>
                    </section>

                    <section className="cpl-section">
                        <h2>Apply for Commercial Pilot License</h2>
                        <p>After passing all exams and completing flight hours:</p>
                        <ul>
                            <li>Submit your logbook and documents to DGCA</li>
                            <li>Undergo Class 1 medical revalidation</li>
                            <li>Apply for CPL issuance</li>
                        </ul>
                    </section>

                    <section className="cpl-section">
                        <h2>Admission Procedure at We One Aviation Academy</h2>
                        <p>We One Aviation Academy provides students with a friendly admission process that leads to Commercial Pilot License enrollment. Our admission process includes:</p>
                        <ul>
                            <li>Initial Counseling: Understand your goals and assess your eligibility.</li>
                            <li>Document Verification: Academic data together with medical records are evaluated.</li>
                            <li>Application Submission: Applicants need to finish the CPL admission form by providing all necessary information.</li>
                            <li>Medical Support: Assistance in scheduling Class 2 and Class 1 medical tests.</li>
                            <li>Orientation & Enrollment: After shortlisting candidates they must join an orientation meeting to begin their ground training.</li>
                            <li>Loan & EMI Assistance: Our support services provide education loan options and EMI solutions to eligible students.</li>
                        </ul>
                        <p>We will support you through the entire training program starting from your initial counseling until you pass your final flight test.</p>
                    </section>

                    <section className="cpl-section cpl-final">
                        <h2>Final Thoughts</h2>
                        <p>The Commercial Pilot License Admission Process consists of multiple stages which let only the most</p>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default admission;
