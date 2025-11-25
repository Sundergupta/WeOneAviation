import React from 'react';
import './style.css';
import TrainingCards from '../../components/TrainingCards';
import About2 from '../../assets/About2.webp';
// Assume you'll place the airplane image in your assets folder
import MissionImage from '../../components/TrainingCards';


const AboutUs = () => {

    const advantages = [
        {
            icon: '🎯',
            title: 'Personalized Coaching',
            description: 'Tailored guidance matching your learning style for optimal understanding.'
        },
        {
            icon: '👨‍🏫',
            title: 'Expert Faculty',
            description: 'Learn crucial concepts from experienced, airline-rated instructors.'
        },
        {
            icon: '⏰',
            title: 'Flexible Scheduling',
            description: 'Study at your own pace with adaptable online class timings.'
        },
        {
            icon: '💰',
            title: 'Affordable Courses',
            description: 'Receive premium ground school education at competitive prices.'
        },
        {
            icon: '❓',
            title: '24/7 Doubt-Clearing',
            description: 'Never get stuck – access round-the-clock support from experts.'
        },
        {
            icon: '🤝',
            title: 'Dedicated Support',
            description: 'We are fully committed to your success, every step of the way.'
        }
    ];


    return (
        <div className="about-us">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-background">
                    <div className="hero-overlay"></div>
                </div>
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">
                            Your Flight Path Starts
                            <span className="highlight"> Here</span>
                        </h1>
                        <p className="hero-subtitle">
                            Comprehensive DGCA Ground School, Type Rating Prep, and Pilot Career Services.
                        </p>
                        <div className="hero-buttons">
                            <button className="btn btn-primary">Start Your Journey</button>
                            <button className="btn btn-secondary">Learn More</button>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <div className="flight-path-animation">
                            <div className="airplane"></div>
                            <div className="flight-path"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who We Are Section */}
            <section className="who-we-are-section">
                <div className="about-bleed">
                    <div className="container about-container">
                        <div className="about-content">
                            <div className="about-text">
                                <div className="section-header">

                                    <h2 className="title-pill">Who We Are</h2>
                                </div>
                                <p className="intro-text">
                                    We One Aviation is a premier aviation organization offering pilot training, aviation
                                    consulting, aviation support services, and NSOP charter operations across India.
                                    We are committed to raising industry standards through transparent guidance,
                                    professional training, and reliable aviation solutions.
                                </p>

                                {/* ✅ NEW CONTENT ADDED HERE – NO LAYOUT CHANGES */}
                                <p className="intro-text">
                                    <strong>Our Services:</strong> We offer comprehensive aviation solutions including Pilot Training, Aviation Consulting, CPL Pathway guidance, NSOP & Charter services, and end-to-end aviation support.
                                </p>

                                <p className="intro-text">
                                    <strong>Pilot Training:</strong> From DGCA Ground Classes to CPL preparation, we guide students through every step with structured training, experienced instructors, and real-world aviation exposure.
                                </p>

                                <p className="intro-text">
                                    <strong>NSOP & Charter Services:</strong> Book safe, reliable, and comfortable charter aircraft for business travel, medical evacuation, wedding charters, or VIP movement under our NSOP-approved operations.
                                </p>

                                <p className="intro-text">
                                    <strong>Aviation Services:</strong> Documentation support, computer number, medicals, onboarding assistance, flying school admission, type rating support, and post-CPL career planning.
                                </p>

                                <p className="intro-text">
                                    <strong>CPL Pathway:</strong> We provide a guided roadmap from Student Pilot License (SPL) to Commercial Pilot License (CPL), including DGCA exams, flying training, RTR(A), and airline preparation.
                                </p>

                                <p className="intro-text">
                                    <strong>Visit Us:</strong> Experience our training environment, meet our experts, and get personalized counselling for your aviation journey at our centres across India.
                                </p>
                                {/* END NEW CONTENT */}

                                <div className="cta-container">
                                    <button className="cta-button">Get in Touch</button>
                                </div>
                            </div>

                            <div className="about-image">
                                <img src={About2} alt="cockpit" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 
            <p className="intro-text">
                <h3 className="small-heading">Our Mission</h3>
                To empower aviation aspirants and clients by delivering safe, affordable, and
                excellence-driven services across aviation training and charter operations.
            </p> */}

            {/* atc section */}
            <section className="atc-advantage">
                <div className="container">
                    <h2 className="section-title">The ATC Advantage</h2>
                    <div className="advantages-grid">
                        {advantages.map((advantage, index) => (
                            <div key={index} className="advantage-card">
                                <div className="advantage-icon">{advantage.icon}</div>
                                <h3 className="advantage-title">{advantage.title}</h3>
                                <p className="advantage-description">{advantage.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="who-we-are-section">
                <div className="about-bleed">
                    <div className="container about-container">
                        <div className="about-content">
                            <div className="about-text">
                                <div className="section-header">
                                    <h2 className="title-pill">✈️ ABOUT US</h2>
                                </div>

                                <p className="intro-text">
                                    <h3 className="small-heading">Our Vision</h3>
                                    To be India’s most trusted name in aviation education, aviation solutions, and charter travel.
                                </p>
                                <h3 className="small-heading">What Sets Us Apart</h3>
                                <ul className="bullet-list">
                                    <li>Comprehensive CPL training pathway</li>
                                    <li>Full aviation services under one roof</li>
                                    <li>NSOP-approved charter operations</li>
                                    <li>Experienced faculties & crew</li>
                                    <li>Honest guidance with no hidden costs</li>
                                    <li>Strong student & client community</li>
                                </ul>

                                <div className="cta-container">
                                    <button className="cta-button">Get in Touch</button>
                                </div>
                            </div>

                            <div className="about-image">
                                <img src={About2} alt="cockpit" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Our Mission Section */}
            <section className="mission-section">
                <div className="mission-container">
                    <div className="mission-image-wrapper">
                        <img src={About2} alt="Commercial airplane landing" className="mission-image" />
                    </div>
                    <div className="mission-content">
                        <div className="mission-pill">
                            <span className="icon">✈️</span> Our Mission
                        </div>
                        <h2 className="mission-title">Our Mission</h2>
                        <p className="mission-text">
                            To empower aviation aspirants and clients by delivering safe, affordable, and
                            excellence-driven services across aviation training and charter operations.                        </p>
                        <button className="btn-get-in-touch">
                            <i className="arrow-icon">→</i> Get In Touch
                        </button>
                    </div>
                </div>
            </section>

        </div >
    );
};

export default AboutUs;
