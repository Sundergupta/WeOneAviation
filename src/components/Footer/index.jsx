import React from "react";
import { Link } from "react-router-dom";

import "./style.css";
import mapImage from "../../assets/adress.png";
import LinkIcon from "../../assets/link.png"; // <-- your icon file
import location from '../../assets/location.png'
import Call from '../../assets/Call.png'
import Email from '../../assets/Email.png'



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
                        aspiring aviators build successful careers.
                        classes, CPL training, international flight programs, expert mentorship,
                        and placement support.
                    </p>
                </div>

                {/* Column 2 */}
                <div className="footer-col">
                    <h3 className="footer-title">Quick Links</h3>
                    <ul className="footer-links">
                        <Link to="/Home"  >
                            <li><img src={LinkIcon} alt="icon" /> Home</li>
                        </Link>
                        <Link to="/AboutUS"  >
                            <li><img src={LinkIcon} alt="icon" /> About Us</li>
                        </Link>
                        <Link to="/commercial-pilot-license"  >
                            <li><img src={LinkIcon} alt="icon" /> Training Programs</li>
                        </Link>
                        <Link to="/Home"  >
                            <li><img src={LinkIcon} alt="icon" /> Map</li>
                        </Link>
                        <Link to="/Home"  >
                            <li><img src={LinkIcon} alt="icon" /> Testimonials</li>
                        </Link>
                        <Link to="/Home"  >
                            <li><img src={LinkIcon} alt="icon" /> Blog</li>
                        </Link>
                        <Link to="/Home"  >
                            <li><img src={LinkIcon} alt="icon" /> FAQ</li>
                        </Link>
                        <Link to="ContactUs"  >
                            <li><img src={LinkIcon} alt="icon" /> Contact</li>
                        </Link>






                        {/* <li><img src={LinkIcon} alt="icon" /> About Us</li>
                        <li><img src={LinkIcon} alt="icon" /> Training Programs</li>
                        <li><img src={LinkIcon} alt="icon" /> Map</li>
                        <li><img src={LinkIcon} alt="icon" /> Testimonials</li>
                        <li><img src={LinkIcon} alt="icon" /> Blog</li>
                        <li><img src={LinkIcon} alt="icon" /> FAQ</li>
                        <li><img src={LinkIcon} alt="icon" /> Contact</li> */}
                    </ul>

                </div>

                {/* Column 3 */}
                <div className="footer-col">
                    <h3 className="footer-title">How to reach us?</h3>
                    <ul className="footer-links">
                        <li><img src={location} alt="icon" />C-404, 3rd Floor, Near Ramphal Chowk,</li>
                        <li>Sector-7, Dwarka, New Delhi - 110075</li>
                        <li><img src={Call} alt="icon" />+91-9667370747</li>
                        <li><img src={Call} alt="icon" />+91-9355566991</li>
                        <li><img src={Email} alt="icon" />Weoneaviation8@gmail.com</li>
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
