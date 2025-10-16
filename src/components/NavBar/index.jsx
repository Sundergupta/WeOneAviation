import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './style.css';
import logo from '../../assets/Logo-removebg-preview.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pilotOpen, setPilotOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const coursesData = [
    {
      title: "Commercial Pilot License (CPL)",
      path: "/commercial-pilot-license",
      submenu: [
        { name: "Air Navigation", path: "/air-navigation" },
        { name: "Aviation Meteorology", path: "/aviation-meteorology" },
        { name: "Air Regulations", path: "/air-regulations" },
        { name: "Technical General", path: "/technical-general" },
        { name: "RTR (A)", path: "/rtr-a" },
        { name: "Commercial Pilot License Simulator", path: "/cpl-simulator" }
      ]
    },
    {
      title: "Cadet Pilot Program",
      path: "/cadet-pilot-program",
      submenu: [
        { name: "Program Eligibility", path: "/cadet-eligibility" },
        { name: "Training Structure", path: "/cadet-training-structure" },
        { name: "Career Pathways", path: "/cadet-career-pathways" },
        { name: "Application Process", path: "/cadet-application" },
        { name: "Financial Assistance", path: "/cadet-financial-assistance" }
      ]
    },
    {
      title: "Airline Preparatory Classes",
      path: "/airline-preparatory-classes",
      submenu: [
        { name: "Interview Preparation", path: "/interview-preparation" },
        { name: "Simulator Assessment", path: "/simulator-assessment" },
        { name: "Psychometric Testing", path: "/psychometric-testing" },
        { name: "Group Exercises", path: "/group-exercises" },
        { name: "Technical Knowledge", path: "/technical-knowledge" },
        { name: "CRM Training", path: "/crm-training" }
      ]
    }
  ];

  const handleSubmenuOpen = (index) => {
    setActiveSubmenu(index);
  };

  const handleSubmenuClose = () => {
    setActiveSubmenu(null);
  };

  const handleMenuClick = () => {
    closeMenu();
    setCoursesOpen(false);
    setActiveSubmenu(null);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Company Logo" />
        </div>

        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link to="/AboutUs" className="navbar-link" onClick={closeMenu}>
              About Us
            </Link>
          </li>

          {/* COURSES DROPDOWN START */}
          <li
            className="navbar-item dropdown-parent"
            onMouseEnter={() => setCoursesOpen(true)}
            onMouseLeave={() => {
              setCoursesOpen(false);
              setActiveSubmenu(null);
            }}
          >
            <span className="navbar-link dropdown-btn">
              Courses ▼
            </span>

            {coursesOpen && (
              <ul className="dropdown-menu">
                {coursesData.map((course, index) => (
                  <li
                    key={index}
                    className="dropdown-item-with-submenu"
                    onMouseEnter={() => handleSubmenuOpen(index)}
                    onMouseLeave={handleSubmenuClose}
                  >
                    {course.submenu ? (
                      <>
                        <span className="dropdown-link has-submenu">
                          {course.title} →
                        </span>
                        {activeSubmenu === index && (
                          <ul className="sub-dropdown-menu">
                            {course.submenu.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <Link
                                  to={subItem.path}
                                  className="sub-dropdown-link"
                                  onClick={handleMenuClick}
                                >
                                  {subItem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <Link
                        to={course.path}
                        className="dropdown-link"
                        onClick={handleMenuClick}
                      >
                        {course.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
          {/* COURSES DROPDOWN END */}

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