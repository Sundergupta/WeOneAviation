import React from "react";
import "./style.css";
import medicalImage from "../../assets/About2.webp";

const DgcaMedical = () => {
    return (
        <div className="dgca-container">
            <h1 className="dgca-title">
                Guide for DGCA Class 2 Medical and DGCA Class 1 Medical
            </h1>

            <img src={medicalImage} alt="DGCA Medical" className="dgca-image" />

            <p className="dgca-text">
                Aspiring pilots in India are required to undergo specific medical assessments to ensure they meet the necessary mental and physical health standards for aviation.
                The Directorate General of Civil Aviation (DGCA) mandates two primary medical examinations—DGCA Class II and DGCA Class I medical certifications. Both assessments are critical to starting and progressing in a pilot’s career.
                In this guide, we will delve into the requirements, procedures, and validity for each of these medical certifications, ensuring that you are well-prepared for each step.
            </p>

            <h2>Overview of DGCA Class II and Class I Medical Examinations</h2>
            <p>
                To become a licensed pilot in India, DGCA mandates medical certifications to verify that pilots meet stringent health standards. These are designed to assess overall fitness, detect any medical conditions that could impair flying ability, and help ensure passenger and crew safety.
            </p>

            <ul>
                <li><b>Class II Medical Certificate</b> – Required initially for a Student Pilot License (SPL) and to start flight training.</li>
                <li><b>Class I Medical Certificate</b> – Necessary for obtaining a Commercial Pilot License (CPL) and for ongoing operation as a commercial pilot.</li>
            </ul>

            <h2>DGCA Class II Medical Examination</h2>
            <p>
                The DGCA Class II medical examination is the entry-level certification for those aspiring to begin their pilot training. This certification is mandatory for obtaining a Student Pilot License and enrolling in a flight school for further training.
            </p>

            <h3>Who Needs a Class II Medical Certificate?</h3>
            <ul>
                <li>Private Pilot License (PPL) holders.</li>
                <li>Student Pilot License (SPL) applicants.</li>
                <li>Flight Radio Telephone Operator’s License holders.</li>
            </ul>

            <h3>Class II Medical Standards</h3>
            <ul>
                <li>Physical Requirements – Basic physical health requirements.</li>
                <li>Vision Requirements – Good eyesight (with corrective lenses if necessary).</li>
                <li>Hearing Requirements – Standard hearing ability for clear communication.</li>
            </ul>

            <h3>Steps to Obtain a Class II Medical Certificate</h3>
            <ol>
                <li>Register on eGCA for DGCA Medical 2</li>
                <li>Choose a DGCA-Approved Doctor</li>
                <li>Undergo the Necessary Medical Tests</li>
                <li>Submit Medical Reports to the DGCA-Approved Doctor</li>
                <li>Receive Your Medical Assessment Certificate</li>
            </ol>

            <h3>DGCA Class I Medical Examination</h3>
            <p>
                After obtaining a Class II medical certificate, pilots pursuing a Commercial Pilot License (CPL) must pass the DGCA Class I medical examination. This assessment is more rigorous, verifying mental and physical fitness for commercial aviation duties.
            </p>

            <h3>Who Needs a Class I Medical Certificate?</h3>
            <ul>
                <li>Commercial Pilot License (CPL) holders.</li>
                <li>Airline Transport Pilot License (ATPL) holders.</li>
                <li>Flight Engineers.</li>
            </ul>

            <p>For more details, you can continue adding the rest of the content similarly...</p>
        </div>
    );
};

export default DgcaMedical;
