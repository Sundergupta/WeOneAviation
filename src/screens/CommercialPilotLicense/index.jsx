import React, { useState } from "react";
import { Outlet, useNavigate, Link, useLocation } from "react-router-dom";
import './style.css';
import SideMenu from "../../components/SideManu";
// import CplIntro from "../CplIntro/CplIntro";
// import CplCourse from "../CplCourse/CplCourse";
// import CplFees from "../CplFees/CplFees";
import CplSalary from "../commercial-pilot-license-salary";


import airplane from '../../assets/home page slider/generate a videos of airplane.jpg';

const CommercialPilotLicense = () => {

    const [activeComponent, setActiveComponent] = useState("intro");

    // ✅ Function to render selected component
    const renderComponent = () => {
        switch (activeComponent) {
            // case "course":
            //     return <CplCourse />;
            // case "fees":
            //     return <CplFees />;
            case <CplSalary />:
                return <CplSalary />;
            // default:
            //     return <CplIntro />;
        }
    };
    const menuItems = [
        { name: "Course Details", path: "/CommercialPilotLicense" },
        { name: "Eligibility", path: "/CommercialPilotLicense/Eligibility" },
        { name: "Commercial Pilot License Salary ", path: "../commercial-pilot-license-salary" },
    ];


    return (
        <div className="commercial-pilot-license">

            {/* Hero Section */}
            <section className="hero-section" style={{ backgroundImage: `url(${airplane})` }}>
                <div className="container">
                    <h1>Commercial Pilot Course in India</h1>
                    <h2>Commercial Pilot License</h2>
                    <p className="subtitle">Course, Fees & Eligibility in India.</p>
                </div>
            </section>
            {/* <SideMenu data={aircraftData} />; */}


            <section className="intro-layout">
                <div className="container two-column">
                    {/* LEFT: Side Menu */}
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

                    {/* RIGHT: Dynamic Content */}
                    <div className="content-column">
                        {location.pathname === "/CommercialPilotLicense" ? (
                            <>
                                <h3>What is Commercial Pilot License?</h3>
                                <p>
                                    Hello Aviators, if your dream is to become a Commercial Pilot,
                                    then you are landing on the perfect page. A Commercial Pilot
                                    License (CPL) is a certification that allows pilots to fly
                                    aircraft professionally and get paid for their services.
                                </p>
                                <p>
                                    If you want to become a pilot, then a Commercial Pilot License
                                    is great for you. There are many licenses for pilots, and the
                                    Commercial Pilot License is one of them.
                                </p>
                                <p>
                                    On this page, you will know all the details about the
                                    Commercial Pilot License — like eligibility, course details,
                                    syllabus, fees, admission process, and salary.
                                </p>
                            </>
                        ) : (
                            <Outlet />
                        )}
                    </div>
                </div>
            </section>

            {/* Practical Flight Training */}
            <section className="flight-training-section">
                <div className="container">
                    <h3>Commercial Pilot License Practical Flight Training</h3>
                    <p>
                        After completing the theoretical subjects of the Commercial Pilot Course, you have to complete flight training from any flying school.
                        Details about flight training are given below:
                    </p>

                    <div className="training-list">
                        <div className="training-item">
                            <h4>Minimum of 200 flying hours</h4>
                            <p>As Per DGCA Rules, Trainees must complete 200 hours of flight time, including various types of training exercises.</p>
                        </div>
                        <div className="training-item">
                            <h4>Solo flying experience</h4>
                            <p>Candidates must demonstrate proficiency in flying alone under different conditions, ensuring they can handle an aircraft independently.</p>
                        </div>
                        <div className="training-item">
                            <h4>Night flying and cross-country navigation</h4>
                            <p>Includes training for operating flights at night and flying between distant airports while following designated airways.</p>
                        </div>
                        <div className="training-item">
                            <h4>Instrument Rating (IR) Training</h4>
                            <p>Prepares pilots to fly in low visibility conditions using cockpit instruments rather than relying on external references.</p>
                        </div>
                        <div className="training-item">
                            <h4>Simulator Training for multi-engine aircraft</h4>
                            <p>Provides hands-on experience with complex aircraft operations, emergency procedures, and navigation systems in a controlled environment before handling actual multi-engine aircraft.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Eligibility Criteria */}
            <section className="eligibility-section">
                <div className="container">
                    <h3>Eligibility Criteria for Commercial Pilot License</h3>
                    <div className="eligibility-grid">
                        <div className="eligibility-item">
                            <h4>Age</h4>
                            <p>Candidate Must Be At Least 18 Years For Getting Commercial Pilot License.</p>
                        </div>
                        <div className="eligibility-item">
                            <h4>Education</h4>
                            <p>The qualifications to become a pilot include passing 12th grade with Mathematics and Physics.</p>
                        </div>
                        <div className="eligibility-item">
                            <h4>DGCA Class 1-2 Medical</h4>
                            <p>The qualification of becoming a pilot requires the candidate to have no physical issues and to qualify for DGCA Class 1 and Class 2 medical examinations.</p>
                        </div>
                        <div className="eligibility-item">
                            <h4>Total Flight Hours</h4>
                            <p>Candidate must have completed a minimum of 200 hours of flight time by DGCA.</p>
                        </div>
                        <div className="eligibility-item">
                            <h4>Pilot-in-Command (PIC) Hours</h4>
                            <p>This should include 100 hours of flight time as Pilot-in-Command (PIC).</p>
                        </div>
                        <div className="eligibility-item">
                            <h4>Instrument Flying Training</h4>
                            <p>At least 10 hours of instruction in flying with instruments is required.</p>
                        </div>
                        <div className="eligibility-item">
                            <h4>Simulator Training</h4>
                            <p>5 hours of training on a flight sim must be done.</p>
                        </div>
                        <div className="eligibility-item">
                            <h4>Nationality & Language Proficiency</h4>
                            <p>The qualification required to become a pilot includes holding Indian citizenship or being an OCI. Candidates must also demonstrate proficiency in English, both written and verbal.</p>
                        </div>
                        <div className="eligibility-item">
                            <h4>Background Check</h4>
                            <p>Candidates applying for commercial pilot training must have no history of crime.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fees Section */}
            <section className="fees-section">
                <div className="container">
                    <h3>Commercial Pilot Course (CPL) Fees in India</h3>
                    <p>
                        Cost to become a pilot in India is Depend on Flying Schools From Where you will do Flying.
                        So There is All Details of CPL Course fees From Classes to Cockpit-
                    </p>

                    <div className="fees-details">
                        <div className="fee-item">
                            <h4>1) DGCA Class 1-2 Medical Test</h4>
                            <p>At First You Have To Clear DGCA Class 1-2 Medical From Any DGCA Medical Doctors. In DGCA Medical, Doctors Check candidate's health to ensure they meet the physical and mental fitness standards required for flying.</p>

                            <div className="medical-details">
                                <h5>The DGCA Medical examination includes:</h5>
                                <ul>
                                    <li><strong>Vision Test 👁️</strong> - Checks distant and near vision (should be 6/6 with or without correction). Color blindness test using the Ishihara test.</li>
                                    <li><strong>Hearing Test 🎧</strong> - Assesses hearing ability using Pure Tone Audiometry (PTA).</li>
                                    <li><strong>Cardiovascular Examination ❤️</strong> - ECG (Electrocardiogram) to check heart function. Blood pressure monitoring.</li>
                                    <li><strong>Neurological Examination 🧠</strong> - Evaluates reflexes, balance, and coordination. MRI or CT scan if necessary.</li>
                                    <li><strong>General Physical Check-up 🩺</strong> - Height, weight, and BMI assessment. Examination of lungs, liver, kidney, and other vital organs.</li>
                                    <li><strong>Blood & Urine Tests 🩸</strong> - Checks for diabetes, cholesterol, liver/kidney function, and infections.</li>
                                    <li><strong>Psychological & Mental Health Assessment 🧠</strong> - Evaluates stress management and mental well-being.</li>
                                </ul>

                                <div className="medical-fees">
                                    <h5>DGCA Medical Fees (Approximate) 💰</h5>
                                    <p><strong>Class 1 Medical:</strong> ₹5,000 – ₹10,000 (at DGCA-approved hospitals)</p>
                                    <p><strong>Class 2 Medical:</strong> ₹3,000 – ₹6,000 (at DGCA-approved doctors)</p>
                                </div>
                            </div>
                        </div>

                        <div className="fee-item">
                            <h4>2) DGCA CPL Exams and Fees</h4>
                            <p>You Have To Give 6 Paper of DGCA Exam. There Are Two Process of Conducting Commercial Pilot License Exam By DGCA. One is Regular Exam and Another is On- Demand Exam. Regular Exam is Happen in 4 Times in a Years and On- Demand Exam is Flexible, as per candidate's choice.</p>
                            <p><strong>The Fees of Regular DGCA Exam is Rs. 2500/ Subjects and Fees Of On-Demand DGCA Exam is Rs. 5000/Paper.</strong></p>
                        </div>

                        <div className="fee-item">
                            <h4>3) DGCA Ground Classes</h4>
                            <p>
                                If You Wants To Crack DGCA Exam Quickly Then DGCA Ground Classes is Important For You Because By The Right Guidance,
                                You Can Clear DGCA Exam Quickly and Achieve Your Dream To Become Commercial Pilot Quickly.
                            </p>
                            <p><strong>Fees of DGCA Ground Classes is Different in Every Institute. So Average Fees of DGCA Ground Classes is 2.5 Lakh.</strong></p>
                        </div>

                        <div className="fee-item">
                            <h4>4) Flying Training Duration and Fees</h4>
                            <p>
                                The Commercial Pilot License (CPL) course takes around 8-10 months to complete. It includes 80 hours of classroom sessions and 200 hours of training,
                                covering Simulator Training and Flying Training. This program helps you become a Commercial Pilot. However, sometimes extra hours might be required for
                                additional checks and tests, which can increase the total fees. Most flying schools charge on an hourly basis.
                                Candidates must have around INR 40 lakh for flying before joining a flight school.
                            </p>
                        </div>
                    </div>

                    {/* Fees Table */}
                    <div className="fees-table">
                        <h4>Commercial Pilot Course (CPL) Fees in India:</h4>
                        <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Expense Category</th>
                                    <th>Approximate Cost (INR)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>DGCA Class 2 Medical Test</td>
                                    <td>₹3,000 - ₹6,000</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>DGCA Class 1 Medical Test</td>
                                    <td>₹5,000 - ₹10,000</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Computer Number Registration</td>
                                    <td>₹2,000 - ₹2,500</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>DGCA Exam Fees (per paper)</td>
                                    <td>₹2,500 - ₹3,000</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>CPL Ground School Fees</td>
                                    <td>₹1,50,000 - ₹3,00,000</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Flying Training (200 hours)</td>
                                    <td>₹35,00,000 - ₹45,00,000</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>Simulator Training</td>
                                    <td>₹2,00,000 - ₹5,00,000</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>Flight School Admission Fees</td>
                                    <td>₹1,00,000 - ₹2,00,000</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>License Issuance & Other DGCA Fees</td>
                                    <td>₹50,000 - ₹1,00,000</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>Visa & Travel (If Training Abroad)</td>
                                    <td>₹2,00,000 - ₹5,00,000</td>
                                </tr>
                                <tr className="total-row">
                                    <td colSpan="2"><strong>Total Estimated CPL Fees in India:</strong></td>
                                    <td><strong>₹40,00,000 – ₹50,00,000 (May vary depending on the flight school and location)</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Academy Section */}
            <section className="academy-section">
                <div className="container">
                    <h3>Start Your Pilot Journey With We One Aviation Academy</h3>
                    <p>
                        We One Aviation Academy is a premier pilot training institute dedicated to shaping future aviators.
                        We offer world-class DGCA ground classes, commercial pilot training, and aviation courses designed to help you achieve your dream of flying.
                        With expert instructors, state-of-the-art facilities, and a structured training program, we prepare you for a successful aviation career.
                    </p>
                    <p><strong>Join us and take the first step toward the skies! ✈️</strong></p>
                    <button className="cta-button">Join Now</button>
                </div>
            </section>

            {/* How to Get CPL */}
            <section className="process-section">
                <div className="container">
                    <h3>How to Get a Commercial Pilot License in India</h3>
                    <div className="process-steps">
                        <div className="step">
                            <h4>Choose Right Ground Classes</h4>
                            <p>At First, You Have to Choose Right Ground Classes Like We One Aviation Academy Which Gives You Advance Pilot Training and Support You Till You will Not Make Commercial air Pilot.</p>
                        </div>
                        <div className="step">
                            <h4>Prepare For DGCA Exam</h4>
                            <p>After Taking Admission in DGCA Ground Classes, You Have to Prepare Yourself For DGCA Exam for Air Navigation, Aviation Meteorology, Air Regulations, Technical General, Technical Specific and Radio Telephony (RTR).</p>
                        </div>
                        <div className="step">
                            <h4>Join Flight Training Academy</h4>
                            <p>After Clear DGCA Exam, You Have To Join Flight Training And Complete 200 Hrs of Flying From Any Flying Schools.</p>
                        </div>
                    </div>

                    <div className="exam-tips">
                        <h4>Preparation Tips For DGCA Exam</h4>
                        <ul>
                            <li>Attend ground classes regularly and use DGCA-approved study materials (e.g., books by authors like R.K. Bali or Oxford Aviation Academy manuals).</li>
                            <li>Practice with past question papers and mock tests.</li>
                            <li>Focus on understanding concepts rather than rote memorization, as questions can be application-based.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Salary Section */}
            <section className="salary-section">
                <div className="container">
                    <h3>Commercial Pilot License Salary</h3>
                    <p>
                        The salary of a commercial pilot depends on a few things, like where they work, how much experience they have, and what kind of plane they fly.
                        Let's look at it step by step:
                    </p>

                    <div className="salary-levels">
                        <div className="salary-level">
                            <h4>Starting Salary (Beginners)</h4>
                            <p>
                                If you're just starting out with a CPL, you might not earn a lot right away. In India, new pilots (called First Officers or Junior Pilots)
                                can make around ₹1.5 lakh to ₹3 lakh per month. That's about ₹18 lakh to ₹36 lakh per year. This is when you're still learning on the job and helping the main pilot (the Captain).
                            </p>
                        </div>
                        <div className="salary-level">
                            <h4>Mid-Level Salary (With Some Experience)</h4>
                            <p>
                                After a few years of flying—say 4 to 10 years—your salary goes up. You might become a Senior First Officer or even a Captain.
                                At this stage, pilots in India can earn between ₹5 lakh to ₹10 lakh per month, which is ₹60 lakh to ₹1.2 crore per year.
                                The more hours you fly, the more you earn!
                            </p>
                        </div>
                        <div className="salary-level">
                            <h4>Top-Level Salary (Senior Pilots)</h4>
                            <p>
                                If you've been flying for a long time (over 10-20 years) and work for a big airline, you can make a lot of money.
                                Senior Captains flying big planes (like international flights) can earn ₹12 lakh to ₹25 lakh per month—or even more!
                                That's over ₹1.5 crore to ₹3 crore per year. Pilots working for international airlines might earn even higher, sometimes double that amount.
                            </p>
                        </div>
                    </div>

                    <div className="benefits">
                        <h4>Extra Benefits Pilots Get</h4>
                        <p>Besides the salary, pilots get some cool perks:</p>
                        <ul>
                            <li>Free or cheap flights for themselves and their families.</li>
                            <li>Health insurance and retirement plans.</li>
                            <li>Hotel stays and travel allowances when they fly to other places.</li>
                            <li>A fancy uniform and a job that feels adventurous!</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Career Opportunities */}
            <section className="career-section">
                <div className="container">
                    <h3>Career Opportunities for Commercial Pilot License Holders in India</h3>
                    <p>
                        Getting a Commercial Pilot License (CPL) in India opens the door to an exciting and rewarding career in aviation.
                        With a CPL, you're allowed to fly planes for money, and there are many job options to explore.
                        Let's look at the different career paths you can take as a CPL holder in India, explained in simple and easy language.
                    </p>

                    <div className="career-options">
                        <div className="career-option">
                            <h4>1. Airline Pilot</h4>
                            <p>This is the most popular choice for CPL holders. You can work for airlines that carry passengers across cities or even countries.</p>
                            <p><strong>What You Do:</strong> Fly big planes like Airbus or Boeing, taking people to their destinations safely.</p>
                            <p><strong>Where You Can Work:</strong> Airlines like IndiGo, Air India, SpiceJet, Vistara, or international ones if you gain more experience.</p>
                            <p><strong>Growth Path:</strong> Start as a First Officer (helping the Captain), and after years of flying (usually 5-10 years), you can become a Captain.</p>
                            <p><strong>Salary:</strong> Beginners earn ₹1.5 lakh to ₹3 lakh per month. Senior pilots can make ₹10 lakh or more monthly.</p>
                        </div>

                        <div className="career-option">
                            <h4>2. Cargo Pilot</h4>
                            <p>Not all planes carry passengers—some carry goods like packages, food, or medical supplies.</p>
                            <p><strong>What You Do:</strong> Fly cargo planes for companies that deliver items across India or globally.</p>
                            <p><strong>Where You Can Work:</strong> Companies like Blue Dart Aviation, Amazon Air (if it expands to India), or logistics firms like FedEx and DHL.</p>
                            <p><strong>Why It's Cool:</strong> Fewer passengers mean less pressure, and you might fly at night or to unique places.</p>
                            <p><strong>Salary:</strong> Similar to airline pilots—₹2 lakh to ₹5 lakh per month to start, growing with experience.</p>
                        </div>

                        <div className="career-option">
                            <h4>3. Charter Pilot</h4>
                            <p>Charter pilots fly private planes for individuals or small groups, like businesspeople or tourists.</p>
                            <p><strong>What You Do:</strong> Fly smaller planes to places that big airlines don't go, like hill stations or private airstrips.</p>
                            <p><strong>Where You Can Work:</strong> Private aviation companies, rich clients, or tourism agencies.</p>
                            <p><strong>Why It's Fun:</strong> You get to meet interesting people and visit offbeat locations.</p>
                            <p><strong>Salary:</strong> ₹1 lakh to ₹4 lakh per month, depending on demand and hours flown.</p>
                        </div>

                        <div className="career-option">
                            <h4>4. Flight Instructor</h4>
                            <p>If you love teaching, you can train new pilots.</p>
                            <p><strong>What You Do:</strong> Teach students how to fly planes and help them get their own CPL.</p>
                            <p><strong>Where You Can Work:</strong> Flight schools like IGRUA, Bombay Flying Club, or private academies.</p>
                            <p><strong>Why It's Great:</strong> You build more flying hours while earning, and it's a stable job.</p>
                            <p><strong>Salary:</strong> ₹1 lakh to ₹3 lakh per month, plus extra hours can boost your income.</p>
                        </div>

                        <div className="career-option">
                            <h4>5. Corporate Pilot</h4>
                            <p>Big companies sometimes have their own planes to fly their staff or owners around.</p>
                            <p><strong>What You Do:</strong> Fly private jets or small planes for business leaders.</p>
                            <p><strong>Where You Can Work:</strong> Large Indian companies like Reliance, Tata, or multinational firms.</p>
                            <p><strong>Perks:</strong> Fewer flights, more predictable schedules, and sometimes better pay.</p>
                            <p><strong>Salary:</strong> ₹2 lakh to ₹6 lakh per month, depending on the company.</p>
                        </div>

                        <div className="career-option">
                            <h4>6. Agricultural Pilot</h4>
                            <p>This is a less common but unique job.</p>
                            <p><strong>What You Do:</strong> Fly small planes to spray crops with water, fertilizers, or pesticides.</p>
                            <p><strong>Where You Can Work:</strong> Rural areas or companies that support farmers.</p>
                            <p><strong>Why It's Different:</strong> You fly low and help grow food for the country!</p>
                            <p><strong>Salary:</strong> ₹1 lakh to ₹2.5 lakh per month.</p>
                        </div>

                        <div className="career-option">
                            <h4>7. Aerial Survey Pilot</h4>
                            <p>Some pilots help map land or take pictures from the sky.</p>
                            <p><strong>What You Do:</strong> Fly over areas to collect data for maps, construction, or research.</p>
                            <p><strong>Where You Can Work:</strong> Government projects, survey companies, or environmental groups.</p>
                            <p><strong>Why It's Interesting:</strong> You contribute to science and planning.</p>
                            <p><strong>Salary:</strong> ₹1.5 lakh to ₹4 lakh per month.</p>
                        </div>

                        <div className="career-option">
                            <h4>8. Emergency Services Pilot (Air Ambulance)</h4>
                            <p>You can save lives by flying medical planes.</p>
                            <p><strong>What You Do:</strong> Transport sick or injured people to hospitals quickly.</p>
                            <p><strong>Where You Can Work:</strong> Hospitals, NGOs, or private ambulance services.</p>
                            <p><strong>Why It's Rewarding:</strong> You help people in need.</p>
                            <p><strong>Salary:</strong> ₹2 lakh to ₹5 lakh per month.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="final-cta-section">
                <div className="container">
                    <h3>Start Your Commercial Flight Training With We One Aviation Academy</h3>
                    <p>
                        We One Aviation Academy is a premier pilot training institute dedicated to shaping future aviators.
                        We Offers Ground Classes to Flight Training. Our Budget Friendly Ground Classes Help Lots of People To Become a Pilot.
                    </p>
                    <p><strong>Join us and take the first step toward the skies! ✈️</strong></p>
                    <button className="cta-button">Join Flight Training Now</button>
                </div>
            </section>

            {/* Contact Form */}
            <section className="contact-section">
                <div className="container">
                    <h3>Get In Touch with Us Anytime!</h3>
                    <p>Join Pilot Training Classes with We One Aviation Academy</p>
                    <p className="contact-phone">+91 9667370747</p>
                    <p className="scholarship">25% Scholarship Granted For Every Students</p>

                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name *</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Please Enter Your Name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number *</label>
                            <input
                                type="tel"
                                id="phone"
                                placeholder="Enter Your Contact Number"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address *</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Please Enter Your Email address"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                placeholder="Edit form"
                                rows="4"
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-button">Submit</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default CommercialPilotLicense;