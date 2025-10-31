import React, { useState } from "react";
import { Outlet, useNavigate, Link, useLocation } from "react-router-dom";


import "./style.css";
import SideMenu from '../../components/SideManu';


const Salary = () => {

    const renderComponent = () => {
        switch (activeComponent) {
            // case "course":
            //     return <CplCourse />;
            // case "fees":
            //     return <CplFees />;
            case "salary":
                return <CplSalary />;
            // default:
            //     return <CplIntro />;
        }
    };

    const [activeComponent, setActiveComponent] = useState("intro");
    const menuItems = [
        { name: "Introduction", onClick: () => setActiveComponent("intro") },
        { name: "Course Details", onClick: () => setActiveComponent("course") },
        { name: "Fees", onClick: () => setActiveComponent("fees") },
        { name: "Commercial Pilot License Salary ", onClick: () => setActiveComponent("salary") },
    ];
    return (
        <div className="salary-page">


            <div className="side-menu-column">

                <br />
                <br />
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
            <br />


            <div className="salary-container">

                <h1>Commercial Pilot License Salary - 2025</h1>

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

                <h2>What is a Commercial Pilot License Salary?</h2>
                <p>
                    After getting their CPL through training and certification pilots can obtain their commercial pilot license
                    salary as monthly or yearly pay. Your career stage alongside your work location determines how much
                    your commercial pilot license salary will be.
                </p>

                <button className="join-btn">Limited Seat - Join Now</button>

                <h2>Entry-Level Commercial Pilot Salary in India</h2>
                <p>
                    A valid Commercial Pilot License allows freshers to begin their aviation career by piloting as First Officer
                    or Co-Pilot. The typical salary for commercial pilots in India with their license that maintains an average
                    range between INR 1.5 to 3 lakhs per month in their first role. The starting salary paid by regional airlines
                    and charter companies is normally lower than the standard amount until pilots build their skills through
                    flying experience.
                </p>

                <h2>Experienced Commercial Pilot Salary</h2>
                <p>
                    Flight experience alongside collecting sufficient flight hours enables pilots to advance their position to
                    Captain. A Captain employed at a leading domestic Indian airline receives a monthly salary between INR
                    6 to 10 lakhs. The salary earnings for international routes and world-class carriers typically exceed the
                    pay of domestic routes.
                </p>

                <h2>Factors Influencing Commercial Pilot License Salary</h2>
                <ul>
                    <li>Airline Type: Pilots working for domestic airlines receive lower pay rates than those employed by international airlines.</li>
                    <li>Aircraft Type: Pilots operating wide-body jets (Boeing 777 or Airbus A350) earn higher salaries compared to smaller aircraft pilots.</li>
                    <li>Experience Level: A pilot’s salary grows as their flight hours increase with professional experience.</li>
                    <li>Location: Pilots working in the Middle East, Southeast Asia, or Europe often receive higher packages.</li>
                    <li>Additional Roles: Training captains, instructors, and examiners receive performance-based bonuses and allowances.</li>
                </ul>

                <h2>Commercial Pilot Salary Abroad</h2>
                <p>
                    Commercial pilot license salaries are high in the USA, Australia, UAE, and Singapore.
                    Newbie pilots typically receive pay between USD 4,000 and 8,000 each month, while experienced captains can
                    earn between USD 10,000 and 20,000 depending on their aircraft and region.
                </p>

                <h2>Additional Benefits</h2>
                <ul>
                    <li>Health and life insurance</li>
                    <li>Travel perks for family</li>
                    <li>Housing or accommodation allowance</li>
                    <li>Retirement and pension plans</li>
                    <li>Training and upskilling opportunities</li>
                </ul>

                <p className="final-text">
                    A commercial pilot license salary offers among the highest professional compensation because it
                    provides exciting travel benefits along with elevated status and employment flexibility across different
                    countries. The sizeable investment in pilot training yields equal benefits to the pilot. Acquiring a CPL
                    enables you to pursue flights either within India’s borders or internationally thereby establishing a stable
                    career with exciting opportunities.
                </p>
            </div>
        </div>
    );
};

export default Salary;
