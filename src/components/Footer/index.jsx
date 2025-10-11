import React from "react";
import "./style.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Logo + Description */}
                <div className="footer-col">
                    <img
                        src="/logo.png"
                        alt="Aviators Training Centre"
                        className="footer-logo"
                    />
                    <p className="footer-text">
                        Providing world-class aviation training for aspiring pilots and
                        aviation professionals.
                    </p>
                    <div className="footer-social">
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-youtube"></i>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="footer-col">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Training Programs</li>
                        <li>Instructors</li>
                        <li>Testimonials</li>
                        <li>Blog</li>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>
                </div>

                {/* Courses */}
                <div className="footer-col">
                    <h3>Our Courses</h3>
                    <ul>
                        <li>Air Navigation</li>
                        <li>Meteorology</li>
                        <li>Air Regulations</li>
                        <li>Technical General</li>
                        <li>Technical Specific</li>
                        <li>RTR(A)</li>
                        <li>A320 & B737 Type Rating Prep</li>
                        <li>One-on-One Online Classes</li>
                        <li>Interview Preparation</li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="footer-col">
                    <h3>Contact Us</h3>
                    <p>Delhi, India</p>
                    <p>+91-9667370747</p>
                    <p>+91-9355566991</p>
                    <p>Weoneaviation8@gmail.com</p>
                    <p>WhatsApp</p>
                </div>
            </div>

            <div className="footer-bottom">
                © 2025 We One  Aviators . All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
