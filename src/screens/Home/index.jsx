import React, { useState, useEffect } from 'react';

// import React from 'react';
import './style.css';
import TrainingCards from '../../components/TrainingCards';
import ReviewCard from '../../components/ReviewCard';
import Slider from '../../components/Slider';
import Map from '../../components/Map';
import IndiGo from '../../assets/indigo.webp';
import AirIndia from '../../assets/air-india-logo.png';

import AirIndiaExpress from '../../assets/Air-india-express-logo.png';
import Spicejet from '../../assets/Spicejet-Logo.webp';
import StarAir from '../../assets/star-air-logo.webp';




const Home = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const companies = [
        { id: 1, name: 'AirIndiaExpress', image: AirIndiaExpress },
        { id: 2, name: 'AirIndia', image: AirIndia },
        { id: 3, name: 'IndiGo', image: IndiGo },
        { id: 4, name: 'AirIndiaExpress', image: AirIndiaExpress },
        { id: 5, name: 'Spicejet', image: Spicejet },
        { id: 6, name: 'StarAir ', image: StarAir },
    ];


    const slides = [
        {
            title: "Your Flight Path Starts Here",
            subtitle: "Comprehensive DGCA Ground School, Type Rating Prep, and Pilot Career Services.",
            // background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
            imager: AirIndia,
            button1: "Start Your Journey",
            button2: "Learn More"
        },
        {
            title: "Advanced Pilot Training",
            subtitle: "Master advanced aviation techniques with our expert instructors and state-of-the-art facilities.",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            button1: "View Courses",
            button2: "Meet Instructors"
        },
        {
            title: "Career Ready Pilots",
            subtitle: "Join thousands of successful pilots who launched their careers with our training programs.",
            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            button1: "Success Stories",
            button2: "Apply Now"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [slides.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const goToNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const goToPrev = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    // Duplicate for seamless loop
    const duplicatedCompanies = [...companies, ...companies, ...companies];

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero-slider">
                <div className="slides-container">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`slide ${index === currentSlide ? 'active' : ''}`}
                            style={{ background: slide.background }}
                        >
                            <div className="slide-background">
                                <div className="slide-overlay"></div>
                            </div>

                            <div className="slide-content">
                                <div className="slide-text">
                                    <h1 className="slide-title">
                                        {slide.title.split(' ').map((word, i, arr) =>
                                            i === arr.length - 1 ? (
                                                <span key={i} className="highlight"> {word}</span>
                                            ) : (
                                                <span key={i}> {word}</span>
                                            )
                                        )}
                                    </h1>
                                    <p className="slide-subtitle">{slide.subtitle}</p>
                                    <div className="slide-buttons">
                                        <button className="btn btn-primary">{slide.button1}</button>
                                        <button className="btn btn-secondary">{slide.button2}</button>
                                    </div>
                                </div>
                                <div className="slide-visual">
                                    <div className="flight-path-animation">
                                        <div className="airplane"></div>
                                        <div className="flight-path"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button className="slider-arrow slider-arrow-prev" onClick={goToPrev}>
                    ‹
                </button>
                <button className="slider-arrow slider-arrow-next" onClick={goToNext}>
                    ›
                </button>

                {/* Dots Indicator */}
                <div className="slider-dots">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </div>
            </section>

            <section className="graduates-hired-section">
                <div className="section-container">
                    <h2 className="section-title">Graduates Hired</h2>
                    <p className="section-subtitle">Our alumni are working at top companies worldwide</p>

                    <div className="slider-container">
                        <div className="slider-track">
                            {duplicatedCompanies.map((company, index) => (
                                <div
                                    key={`${company.id}-${index}`}
                                    className="company-card"
                                >
                                    {company.image ? (
                                        <img
                                            src={company.image}
                                            alt={company.name}
                                            className="company-logo"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'block';
                                            }}
                                        />
                                    ) : null}
                                    <span
                                        className="company-name"
                                        style={{ display: company.image ? 'none' : 'block' }}
                                    >
                                        {company.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="stats-container">
                        <div className="stat-item">
                            <div className="stat-number">200+</div>
                            <div className="stat-label">Graduates</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">50+</div>
                            <div className="stat-label">Companies</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">95%</div>
                            <div className="stat-label">Placement Rate</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <div className="container">
                    <div className="features-header">
                        <h2>Why Choose Our Aviation Training?</h2>
                        <p>Experience world-class pilot training with industry-leading features and support</p>
                    </div>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">👨‍✈️</div>
                            <h3>Airline Instructors</h3>
                            <p>Learn directly from experienced pilots & engineers currently active in major airlines.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">💬</div>
                            <h3>24/7 Doubt Support</h3>
                            <p>Get your questions answered anytime with dedicated support from our expert faculty.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">📊</div>
                            <h3>Structured Curriculum</h3>
                            <p>Master the complete DGCA syllabus with our organized, exam-focused online ground school.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">⏰</div>
                            <h3>Flexible Online Classes</h3>
                            <p>Study at your own pace with adaptable schedules fitting your personal commitments.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">📈</div>
                            <h3>High Success Rate</h3>
                            <p>Benefit from proven teaching methods and rigorous mock tests designed for exam success.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">🎯</div>
                            <h3>Specialized Training</h3>
                            <p>Access additional courses like RTR(A) preparation and Type Rating guidance.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="services">
                <div className="container">
                    <h2>Our Training Programs</h2>
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon">📚</div>
                            <h4>DGCA Ground School</h4>
                            <p>Complete theoretical knowledge training for CPL and ATPL examinations.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">🎯</div>
                            <h4>Type Rating Preparation</h4>
                            <p>Specialized training for various aircraft types with simulator practice.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">🚀</div>
                            <h4>Career Guidance</h4>
                            <p>Personalized career counseling and airline preparation sessions.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pathway Section */}
            <section className="pathway-section">
                <div className="container">
                    <div className="pathway-header">
                        <h2>Your Pathway to the Cockpit</h2>
                        <p>Follow our structured roadmap from enrollment to becoming an airline-ready pilot, covering DGCA exams and essential skills.</p>
                    </div>

                    <div className="pathway-grid">
                        <div className="pathway-card">
                            <div className="card-number">01</div>
                            <h3>Eligibility & Enrollment</h3>
                            <p>Meet basic requirements and enroll in our comprehensive ground school program.</p>
                        </div>

                        <div className="pathway-card">
                            <div className="card-number">02</div>
                            <h3>DGCA Exams</h3>
                            <p>Successfully pass all CPL/ATPL theoretical knowledge examinations.</p>
                        </div>

                        <div className="pathway-card">
                            <div className="card-number">03</div>
                            <h3>Ground School Mastery</h3>
                            <p>Complete our structured online classes covering all DGCA subjects.</p>
                        </div>

                        <div className="pathway-card">
                            <div className="card-number">04</div>
                            <h3>RTR(A) License</h3>
                            <p>Obtain your Radio Telephony Restricted (Aeronautical) license.</p>
                        </div>

                        <div className="pathway-card">
                            <div className="card-number">05</div>
                            <h3>Type Rating Prep (Optional)</h3>
                            <p>Prepare for A320/B737 Type Rating (if pursuing an airline career).</p>
                        </div>

                        <div className="pathway-card">
                            <div className="card-number">05</div>
                            <h3>Airline Interview Ready</h3>
                            <p>Build confidence and skills for airline interviews.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Limited Time Offer Section */}
            <section className="offer-section">
                <div className="container">
                    <div className="offer-card">
                        <div className="offer-badge">Limited Time Offer</div>
                        <h2>Enroll Now!</h2>
                        <p className="offer-subtitle">Special discount available for the next batch starting soon. Secure your spot today!</p>

                        <div className="offer-highlight">
                            <div className="offer-icon">👍</div>
                            <div className="offer-text">
                                <strong>Enroll by Oct 18 for 20% Off</strong>
                                <span className="offer-expiry">(Offer expires soon!)</span>
                            </div>
                        </div>

                        <div className="offer-cta">
                            <p className="seats-warning">Limited seats! Schedule a consultation</p>
                            <button className="consultation-btn">Book Consultation</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Training Programs Section */}
            <section className="training-programs">
                <div className="container">
                    <div className="programs-header">
                        <h2>Our Core Training Programs</h2>
                        <p>Expert-led online ground school and specialized preparation courses designed for your success in DGCA exams and beyond.</p>
                    </div>

                    <div className="programs-divider"></div>

                    <div className="programs-grid">
                        <div className="program-card">
                            <div className="program-image">
                                {/* Empty image container */}
                            </div>
                            <div className="program-content">
                                <h3>CPL & ATPL Ground School</h3>
                                <p>Comprehensive online classes covering all DGCA subjects - Navigation, Meteorology, Regulations, and Technical.</p>
                                <button className="learn-more-btn">Learn More</button>
                            </div>
                        </div>

                        <div className="program-card">
                            <div className="program-image">
                                {/* Empty image container */}
                            </div>
                            <div className="program-content">
                                <h3>RTR(A) Radio Telephony</h3>
                                <p>Master aviation communication protocols and prepare for the Radio Telephony Restricted (Aeronautical) license exam.</p>
                                <button className="learn-more-btn">Learn More</button>
                            </div>
                        </div>

                        <div className="program-card">
                            <div className="program-image">
                                {/* Empty image container */}
                            </div>
                            <div className="program-content">
                                <h3>Type Rating Prep</h3>
                                <p>Affordable guidance for A320 & B737 pre/post type rating, covering questions for major airline exams.</p>
                                <button className="learn-more-btn">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Review Cards Section */}
            <section className="review-section">
                <div className="container">

                    <Slider />
                </div>
            </section>
            {/* <section className="Map-section">
                <div className="container">

                    <Map />
                </div>
            </section> */}

        </div>
    );
};

export default Home;