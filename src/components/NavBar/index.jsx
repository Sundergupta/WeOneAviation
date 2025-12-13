import React, { useState, useEffect, useRef } from 'react'; // Import useRef
import { Link, useLocation } from "react-router-dom";
import './style.css';
import logo from '../../assets/Logo.webp';

const Navbar = () => {
  // Reference to the entire navbar container for outside click detection
  const navbarRef = useRef(null);

  // State for Mobile/Hamburger Menu
  const [isOpen, setIsOpen] = useState(false);
  // State for Navbar style on scroll
  const [scrolled, setScrolled] = useState(false);

  // 1. STATE FOR MAIN DROPDOWNS (Click Logic)
  const [pilotOpen, setPilotOpen] = useState(false);   // Pilot Career
  const [coursesOpen, setCoursesOpen] = useState(false); // Pilot Training
  const [servicesOpen, setServicesOpen] = useState(false); // Aviation Services

  // 2. STATE FOR NESTED SUBMENU
  const [activeSubmenuIndex, setActiveSubmenuIndex] = useState(null);

  const location = useLocation();

  // --- HANDLERS ---

  // Mobile menu toggle
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Optionally close all dropdowns when the hamburger is clicked
    closeAllDropdowns();
  };

  // Closes only the mobile/hamburger menu
  const closeMenu = () => setIsOpen(false);

  // Closes all dropdowns (Used when navigating/closing the main menu)
  const closeAllDropdowns = () => {
    setPilotOpen(false);
    setCoursesOpen(false);
    setServicesOpen(false);
    setActiveSubmenuIndex(null);
  };

  // Handles clicks on the main dropdown buttons (e.g., Pilot Training)
  const toggleDropdown = (setter, currentState) => {
    // Close all other dropdowns first
    closeAllDropdowns();

    // Toggle the current one
    setter(!currentState);

    // Ensure the mobile menu stays open if a dropdown is clicked inside it
    if (isOpen) {
      setIsOpen(true);
    }
  };

  // Handles clicks on a submenu item (applies to both desktop and mobile now)
  const handleSubmenuClick = (index) => {
    // Toggle the active submenu, close if already open
    setActiveSubmenuIndex(activeSubmenuIndex === index ? null : index);
  };

  // Handles clicks on final link destination
  const handleLinkClick = () => {
    closeMenu();
    closeAllDropdowns();
  };

  // --- EFFECTS ---
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // *NEW* Outside Click Listener Effect
  useEffect(() => {
    function handleClickOutside(event) {
      // Check if the click occurred outside the navbar container
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        // Only close the dropdowns, not the mobile menu itself (unless you want that too)
        if (!isOpen) { // Do not close dropdowns if the main mobile menu is open
          closeAllDropdowns();
        }
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on cleanup
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]); // Re-run effect if mobile menu state changes

  // Helper to check if a link is active
  const isActive = (path) => location.pathname === path;

  // --- DATA (Unchanged) ---
  const coursesData = [
    {
      title: "Commercial Pilot License (CPL)",
      path: "/commercial-pilot-license",
      submenu: [
        { name: "Commercial Pilot License", path: "/commercial-pilot-license" },
        { name: "DGCA CPL Ground Classes", path: "/dgca-ground-classes-in-india" },
        { name: "Air Navigation", path: "/AirNavigation" },
        { name: "Aviation Meteorology", path: "/aviation-meteorology" },
        { name: "Air Regulations", path: "/air-regulations" },
        { name: "Technical General", path: "/technical-general" },
        { name: "RTR (A)", path: "/rtr-a" },
        { name: "CPL Simulator", path: "/cpl-simulator" }
      ]
    },
    {
      title: "Cadet Pilot Program",
      path: "/cadet-pilot-program",
      submenu: [
        { name: "Program Eligibility", path: "/commercial-pilot-license-eligibility" },
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

  const servicesData = [
    { name: "Pilot Training Consultancy", path: "/pilot-training" },
    { name: "Charter Services", path: "/chartered-services" },
    { name: "Aircraft Sale & Purchase", path: "/aircraft-sale-purchase" },
    { name: "Airport Ground Handling", path: "/airport-ground-handling-service" },
    { name: "Aviation Placement", path: "/aviation-placement-service" },
    { name: "Aircraft Management", path: "/aircraft-management" },
    { name: "Aircraft Spare Parts", path: "/aircraft-spare-parts" },
  ];

  // --- RENDER ---
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} ref={navbarRef}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" onClick={handleLinkClick}>
            <img src={logo} alt="Company Logo" />
          </Link>
        </div>

        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          {/* ABOUT US (Simple Link) */}
          <li className="navbar-item">
            <Link
              to="/about-Us"
              className={`navbar-link ${isActive('/about-Us') ? 'active-link' : ''}`}
              onClick={handleLinkClick}
            >
              About Us
            </Link>
          </li>

          {/* 1. PILOT TRAINING DROPDOWN - HOVER REMOVED */}
          <li className="navbar-item dropdown-parent">
            <span
              className="navbar-link dropdown-btn"
              onClick={() => toggleDropdown(setCoursesOpen, coursesOpen)}
            >
              Pilot Training ▼
            </span>

            <ul className={`dropdown-menu ${coursesOpen ? 'active' : ''}`}>
              {coursesData.map((course, index) => (
                <li
                  key={index}
                  // The 'active' class on this li is now only toggled by click
                  className={`dropdown-item-with-submenu ${activeSubmenuIndex === index ? 'active' : ''}`}
                >
                  {course.submenu ? (
                    <>
                      <span
                        className="dropdown-link has-submenu"
                        // CLICK: Toggle submenu open/close
                        onClick={() => handleSubmenuClick(index)}
                      >
                        {course.title} →
                      </span>

                      {/* Submenu uses the 'active' class to show/hide */}
                      <ul className={`sub-dropdown-menu ${activeSubmenuIndex === index ? 'active' : ''}`}>
                        {course.submenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              to={subItem.path}
                              className="sub-dropdown-link"
                              onClick={handleLinkClick}
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      to={course.path}
                      className="dropdown-link"
                      onClick={handleLinkClick}
                    >
                      {course.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </li>

          {/* 2. PILOT CAREER DROPDOWN - HOVER REMOVED */}
          <li className="navbar-item dropdown-parent">
            <span
              className="navbar-link dropdown-btn"
              onClick={() => toggleDropdown(setPilotOpen, pilotOpen)}
            >
              Pilot Career ▼
            </span>

            <ul className={`dropdown-menu ${pilotOpen ? 'active' : ''}`}>
              <li>
                <Link to="/dgca-computer-number" onClick={handleLinkClick} className="dropdown-link">
                  Apply For DGCA Computer Number
                </Link>
              </li>
              <li>
                <Link to="/dgca-class-2-class-1-medical" onClick={handleLinkClick} className="dropdown-link">
                  DGCA Class 2 & 1 Medical
                </Link>
              </li>
              <li>
                <Link to="/DGCA-ground-classes-in-india" onClick={handleLinkClick} className="dropdown-link">
                  Join DGCA CPL Ground Classes
                </Link>
              </li>
              <li>
                <Link to="/DgcaGroundClasses" onClick={handleLinkClick} className="dropdown-link">
                  Join Flying School
                </Link>
              </li>
            </ul>
          </li>

          {/* 3. AVIATION SERVICES DROPDOWN - HOVER REMOVED */}
          <li className="navbar-item dropdown-parent">
            <span
              className="navbar-link dropdown-btn"
              onClick={() => toggleDropdown(setServicesOpen, servicesOpen)}
            >
              Aviation Services ▼
            </span>

            <ul className={`dropdown-menu ${servicesOpen ? 'active' : ''}`}>
              {servicesData.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="dropdown-link"
                    onClick={handleLinkClick}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* DGCA PREP (Simple Link) */}
          <li className="navbar-item">
            <a
              href="https://dgcaexam.com/"
              className="navbar-link"
              onClick={handleLinkClick}
              target="_blank"
              rel="noopener noreferrer"
            >
              DGCA Prep
            </a>
          </li>

          {/* BLOGS (Simple Link) */}
          <li className="navbar-item">
            <Link
              to="/blogs"
              className={`navbar-link ${isActive('/blogs') ? 'active-link' : ''}`}
              onClick={handleLinkClick}
            >
              Blogs
            </Link>
          </li>
        </ul>

        {/* Hamburger/Mobile Toggle */}
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