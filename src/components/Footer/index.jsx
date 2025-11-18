import React from "react";
import "./style.css";
import mapImage from "../../assets/adress.png";

const Footer = () => {

    const latitude = 28.5855530;
    const longitude = 77.0681967;

    const googleMapLink = `https://www.google.com/maps?q=${latitude},${longitude}`;

    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Column 1 */}
                <div className="footer-col">
                    <h3 className="footer-title">We One Aviation</h3>
                    <p className="footer-desc">
                        We One Aviation is a leading pilot training academy dedicated to helping
                        aspiring aviators build successful careers. Offering DGCA-approved ground
                        classes, CPL training, international flight programs, expert mentorship,
                        and placement support.
                    </p>
                </div>

                {/* Column 2 */}
                <div className="footer-col">
                    <h3 className="footer-title">Quick Links</h3>
                    <ul className="footer-links">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Training Programs</li>
                        <li>Map</li>
                        <li>Testimonials</li>
                        <li>Blog</li>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div className="footer-col">
                    <h3 className="footer-title">How to reach us?</h3>
                    <ul className="footer-contact">
                        <li>C-404, 3rd Floor, Near Ramphal Chowk,</li>
                        <li>Sector-7, Dwarka, New Delhi - 110075</li>
                        <li>+91-9667370747</li>
                        <li>+91-9355566991</li>
                        <li>Weoneaviation8@gmail.com</li>
                    </ul>
                </div>

                {/* Column 4 → Map */}
                {/* Column 4 → Map */}
                <div className="footer-col">
                    <h3 className="footer-title">Our Location</h3>

                    <a
                        href="https://www.google.com/maps?q=C-404,+3rd+Floor,+Near+Ramphal+Chowk,+Sector-7,+Dwarka,+New+Delhi+-+110075"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="adress"
                            src={mapImage}  // your downloaded image
                            alt="Our Location on Map"
                        />
                    </a>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
