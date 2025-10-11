import React, { useState, useEffect } from 'react';
import './style.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1>WE ONE AVIATORS </h1>
        </div>
        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li className="navbar-item"><a href="#home" className="navbar-link" onClick={closeMenu}>Home</a></li>
          <li className="navbar-item"><a href="#about" className="navbar-link" onClick={closeMenu}>About Us</a></li>
          <li className="navbar-item"><a href="#training" className="navbar-link" onClick={closeMenu}>Training Programs</a></li>
          <li className="navbar-item"><a href="#instructors" className="navbar-link" onClick={closeMenu}>Instructors</a></li>
          <li className="navbar-item"><a href="#testimonials" className="navbar-link" onClick={closeMenu}>Testimonials</a></li>
          <li className="navbar-item"><a href="#blog" className="navbar-link" onClick={closeMenu}>Blog</a></li>
          <li className="navbar-item"><a href="#faq" className="navbar-link" onClick={closeMenu}>FAQ</a></li>
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
