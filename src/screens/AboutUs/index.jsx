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
                                    Aviators Training Centre (ATC) is a premier ground school specializing in comprehensive
                                    preparation for the DGCA CPL and ATPL examinations. Founded by experienced aviation
                                    professionals, we recognized the need for a more focused, efficient, and student-centric
                                    approach to ground training. Our core mission is to deliver top-tier, professional pilot
                                    training programs that build a rock-solid foundation of theoretical knowledge, essential for a
                                    safe and successful career in the skies. We're passionate about helping you transform your
                                    aviation dreams into reality.
                                </p>
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

            {/* <section className="who-we-are-section">
                <div className="about-bleed">
                    <div className="container about-container">
                        <div className="about-content">
                            <div className="about-text">

                                <p className="intro-text">
                                    Aviators Training Centre (ATC) is a premier ground school specializing in comprehensive
                                    preparation for the DGCA CPL and ATPL examinations. Founded by experienced aviation
                                    professionals, we recognized the need for a more focused, efficient, and student-centric
                                    approach to ground training. Our core mission is to deliver top-tier, professional pilot
                                    training programs that build a rock-solid foundation of theoretical knowledge, essential for a
                                    safe and successful career in the skies. We're passionate about helping you transform your
                                    aviation dreams into reality.
                                </p>
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


            <section className="who-we-are-section">
                <div className="about-bleed">
                    <div className="container about-container">
                        <div className="about-content">
                            <div className="about-text">

                                <p className="intro-text">
                                    Aviators Training Centre (ATC) is a premier ground school specializing in comprehensive
                                    preparation for the DGCA CPL and ATPL examinations. Founded by experienced aviation
                                    professionals, we recognized the need for a more focused, efficient, and student-centric
                                    approach to ground training. Our core mission is to deliver top-tier, professional pilot
                                    training programs that build a rock-solid foundation of theoretical knowledge, essential for a
                                    safe and successful career in the skies. We're passionate about helping you transform your
                                    aviation dreams into reality.
                                </p>
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
            </section> */}

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


            {/* Our Mission Section - ADDED FROM IMAGE */}
            <section className="mission-section">
                <div className="mission-container">
                    <div className="mission-image-wrapper">
                        {/* Replace MissionImage with the actual import path for your airplane image */}
                        <img src={About2} alt="Commercial airplane landing" className="mission-image" />
                    </div>
                    <div className="mission-content">
                        <div className="mission-pill">
                            <span className="icon">✈️</span> Our Mission
                        </div>
                        <h2 className="mission-title">Our Mission</h2>
                        <p className="mission-text">
                            Our mission is to bridge the gap between aspiration and achievement in the aviation world. We understand that every individual who dreams of the skies has unique challenges and ambitions. That's why we're tailored our approach to be as personalized as it is comprehensive. Our team of experts is dedicated to guiding you through every step, from foundational knowledge to advanced techniques. We strive to create an environment that's not only conducive to learning but also inspires growth, creativity, and collaboration. It's not just about passing exams; it's about fostering a lifelong passion for flight and equipping you with the skills and confidence to navigate your aviation career.
                        </p>
                        <button className="btn-get-in-touch">
                            <i className="arrow-icon">→</i> Get In Touch
                        </button>
                    </div>
                </div>
            </section>

            {/* Training Cards Section */}
            {/* <section className="training-section">
                <div className="container">
                    <TrainingCards />
                </div>
            </section> */}
        </div>
    );
};

export default AboutUs;