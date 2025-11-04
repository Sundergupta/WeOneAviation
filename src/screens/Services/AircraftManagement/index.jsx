import React from "react";
import "./style.css";
// import management1 from "../../assets/AircraftManagement/image1.jpg";
// import management2 from "../../assets/AircraftManagement/image2.jpg";

const AircraftManagement = () => {
    return (
        <div className="dynamic-page">
            {/* -------- HEADER SECTION -------- */}
            <div className="header-section">
                <h2>Aircraft Management</h2>
                <p>
                    <span>Home</span> / Aircraft Management
                </p>
            </div>

            {/* -------- IMAGE SECTION -------- */}
            {/*
            <div className="image-section">
                <img src={management1} alt="Aircraft Management" />
                <img src={management2} alt="Aircraft Management" />
            </div>
            */}

            {/* -------- CONTENT SECTION -------- */}
            <div className="content-section">
                <h2>ENQUIRE NOW</h2>
                <p>
                    In its most basic form, aviation management is a word used to describe
                    the many services an aircraft management business provides. Some
                    aviation management businesses handle specific aircraft operation and
                    maintenance areas, while others provide a full-service turnkey
                    programme.
                </p>
                <p>
                    Our objective at FLY SPACE is to deliver considerable cost savings and
                    outstanding service in all areas of aircraft ownership. We have
                    comprehensive aircraft management programmes that provide our
                    customers with a wide range of services. We may supply you with
                    partial or complete aircraft management and charter revenue offset
                    depending on your preferences and demands. Some of the critical
                    services we provide are listed below:
                </p>

                <ul>
                    <li>We are dealing with hangar discussions.</li>
                    <li>Ensure compliance with the FAA and ICAO.</li>
                    <li>We provide trip concierge services on board aeroplanes.</li>
                    <li>Aircraft and flying crews are scheduled.</li>
                    <li>Accounting services are provided.</li>
                    <li>
                        We offer fleet insurance and fuel, labour, and parts savings.
                    </li>
                    <li>
                        We are meeting with customers to get sales and property tax
                        information.
                    </li>
                    <li>Charter income offsets ownership expenses.</li>
                    <li>We are providing aeroplane detailing.</li>
                </ul>

                <p>
                    We are pleased to provide our customers with various comprehensive
                    aircraft management services. Our world-class crew training
                    programmes, extensive report generation accounting services, and
                    savings on goods like fuel, parts, and maintenance are some of the top
                    jet owner advantages of working with us.
                </p>
                <p>
                    Our customers like how we make everything regarding aviation logistics
                    simpler for them, allowing them to spend more time enjoying their
                    aircraft. When you work with our aircraft management team at FLY
                    SPACE, you will get highly specialised services tailored to your
                    specific needs. Our 24-hour service for aircraft located at our Delhi
                    area airports ensures that you can always get experienced advice when
                    you need it.
                </p>

                <p>
                    Don't hesitate to contact us to learn more about our aircraft
                    management services.
                </p>

                <h3>Click here to know more:</h3>
                <ul className="service-links">
                    <li>CAMO Service</li>
                    <li>MRO Service</li>
                    <li>FBO</li>
                    <li>AVIONICS</li>
                    <li>Livery & Painting</li>
                    <li>Line Maintenance</li>
                    <li>Base Maintenance</li>
                </ul>

                <p className="tags">
                    <strong>Tags:</strong> basic form, parts, savings, extensive report
                    generation accounting services, world-class crew training programmes,
                    comprehensive aircraft management services, highly specialised
                    services tailored, aviation logistics simpler, aircraft ownership,
                    cost savings, Delhi area airports, maintenance, management team
                </p>
            </div>

            {/* -------- RELATED SERVICES -------- */}
            <div className="related-section">
                <h2>Related Services</h2>

                <div className="related-services">
                    <div className="related-card">
                        <h3>Pilot Training</h3>
                        <p>
                            Individualised crew training programmes may be built and adapted to
                            meet the specific needs of your aviation employment. Fly Space
                            Delhi Aviation knows the significance of providing first-rate
                            training.
                        </p>
                        <button>Learn more</button>
                    </div>

                    <div className="related-card">
                        <h3>Chartered Services</h3>
                        <p>
                            In Dwarka, Delhi, book your Private Charter aircraft. Pilot with
                            government authorisation and expertise. Aircraft rentals available
                            24/7 for individuals or businesses.
                        </p>
                        <button>Learn more</button>
                    </div>

                    <div className="related-card">
                        <h3>Air Craft Sale Purchase</h3>
                        <p>
                            FLY SPACE has a solid track record of advising customers through
                            the complete aircraft purchase process for both new and used
                            aircraft.
                        </p>
                        <button>Learn more</button>
                    </div>
                </div>
            </div>

            {/* -------- CONTACT / CHAT SECTION -------- */}
            <div className="chat-section">
                <h3>Chat with us on WhatsApp</h3>
                <input type="text" placeholder="Your Phone Number" />
                <textarea placeholder="Write your message here"></textarea>
                <button>Contact Us to Know More</button>
            </div>
        </div>
    );
};

export default AircraftManagement;
