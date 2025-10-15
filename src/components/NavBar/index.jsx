import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './style.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pilotOpen, setPilotOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1>WE ONE AVIATORS</h1>
        </div>

        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link to="/AboutUs" className="navbar-link" onClick={closeMenu}>
              About Us
            </Link>
          </li>

          <li className="navbar-item">
            <a href="#training" className="navbar-link" onClick={closeMenu}>
              Flying Country
            </a>
          </li>

          {/* DROPDOWN START */}
          <li
            className="navbar-item dropdown-parent"
            onMouseEnter={() => setPilotOpen(true)}
            onMouseLeave={() => setPilotOpen(false)}
          >
            <span className="navbar-link dropdown-btn">
              How To Become a Pilot ▼
            </span>

            {pilotOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/dgca-computer-number" onClick={closeMenu}>
                    Apply For DGCA Computer Number
                  </Link>
                </li>
                <li>
                  <Link to="/dgca-class-2-class-1-medical" onClick={closeMenu}>
                    DGCA Class 2 & Class 1 Medical
                  </Link>
                </li>
                <li>
                  <Link to="/DGCA-ground-classes-in-india" onClick={closeMenu}>
                    Join DGCA CPL Ground Classes
                  </Link>
                </li>
                <li>
                  <Link to="/DgcaGroundClasses" onClick={closeMenu}>
                    Join Flying School
                  </Link>
                </li>
              </ul>
            )}
          </li>
          {/* DROPDOWN END */}

          <li className="navbar-item">
            <a href="https://dgcaexam.com/" className="navbar-link" onClick={closeMenu}>
              DGCA Exam Practice
            </a>
          </li>

          <li className="navbar-item">
            <Link to="/about" className="navbar-link" onClick={closeMenu}>
              About Us
            </Link>
          </li>

          <li className="navbar-item">
            <Link to="/contact" className="navbar-link" onClick={closeMenu}>
              Contact Us
            </Link>
          </li>

          <li className="navbar-item">
            <Link to="/blogs" className="navbar-link" onClick={closeMenu}>
              Blogs
            </Link>
          </li>
        </ul>

        <div className={`navbar-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
