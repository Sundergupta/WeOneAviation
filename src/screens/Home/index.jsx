import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import './style.css';
import TrainingCards from '../../components/TrainingCards';
import ReviewCard from '../../components/ReviewCard';
import Slider from '../../components/Slider';
import Map from '../../components/Map';
import IndiGo from '../../assets/indigo.webp';
import AirIndia from '../../assets/air-india-logo.png';
import AirIndiaExpress from '../../assets/Air-india-express-logo.png';
import Spicejet from '../../assets/SpiceJet-Logo.webp';
import StarAir from '../../assets/star-air-logo.webp';
import airplane from '../../assets/home page slider/generate a videos of airplane.jpg';
import airplane2 from '../../assets/home page slider/generate a videos of airplane.jpg';
import airplane3 from '../../assets/home page slider/generate image of airplane.jpg';
import GroundSchool from '../../assets/GroundSchool.jpg';
import RTR from '../../assets/RTR.jpeg';
import TypeRatingPrep from '../../assets/TypeRatingPrep.jpeg';


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
            title: "BEST PILOT TRAINING IN INDIA",
            subtitle: "Join Best Pilot Training Institute In India. Get world-class flight training, DGCA-approved courses, and expert guidance to kickstart your aviation career.",
            image: airplane,
            button1: "Contact Us",
            button2: "Learn More"
        },
        {
            title: "We Deliver 3000+ Pilots To India Since 2011",
            subtitle: "Clear Your DGCA Exam In First Attempt With We One Aviation Academy",
            image: airplane2,
            button1: "View Courses",
            button2: "Meet Instructors"
        },
        {
            title: "From Ground to Sky",
            subtitle: "Premier DGCA Exam Coaching & Flight Training for Aspiring Pilots",
            image: airplane3,
            button1: "Success Stories",
            button2: "Apply Now"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    const goToSlide = (index) => setCurrentSlide(index);
    const goToNext = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const goToPrev = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    const duplicatedCompanies = [...companies, ...companies, ...companies];

    return (
        <div className="home">
            {/* Hero Section */}
            <Helmet>
                <title>We One Aviation – DGCA Pilot Training & Pilot License</title>
                <meta
                    name="description"
                    content="Train to become a licensed pilot with We One Aviation Academy. DGCA-ground classes, CPL courses, international flying schools & career support."
                />
            </Helmet>
            <section className="hero-slider">
                <div className="slides-container">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`slide ${index === currentSlide ? 'active' : ''}`}
                            style={{
                                backgroundImage: `url(${slide.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >
                            <div className="slide-overlay"></div>
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
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button className="slider-arrow slider-arrow-prev" onClick={goToPrev}>‹</button>
                <button className="slider-arrow slider-arrow-next" onClick={goToNext}>›</button>

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

            {/* Course Highlights Section */}
            <section className="course-highlights">
                <div className="container">
                    <h2>Our Premier Pilot Training Programs</h2>
                    <div className="highlights-grid">
                        <div className="highlight-card">
                            <div className="highlight-icon">✈️</div>
                            <h3>Commercial Pilot License</h3>
                            <p>Dreaming of Becoming a Commercial Pilot? Get DGCA-approved training, expert mentorship and hands-on flight experience.</p>
                            <button className="highlight-btn">Learn More</button>
                        </div>
                        <div className="highlight-card">
                            <div className="highlight-icon">📖</div>
                            <h3>DGCA-CPL Ground Classes</h3>
                            <p>Master Every DGCA Subject & Fly High! Our DGCA Ground Classes make learning easy & effective. Get trained by industry experts!</p>
                            <button className="highlight-btn">Learn More</button>
                        </div>
                        <div className="highlight-card">
                            <div className="highlight-icon">🎓</div>
                            <h3>Enroll in Flying School</h3>
                            <p>At Our Flying School, we train future pilots with state-of-the-art aircraft, expert instructors, and guaranteed career guidance.</p>
                            <button className="highlight-btn">Learn More</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Course Details Section */}
            <section className="course-details">
                <div className="container">
                    <h2>Course Duration, Fee & Schedule</h2>
                    <p className="section-subtitle">Details of Pilot Courses, Fees and Schedule of Our Batches. We Generally Start 2 Batches in a Months For Aviation Students.</p>

                    <div className="courses-grid">
                        <div className="course-card">
                            <h3>DGCA CPL Ground Classes</h3>
                            <p>This is Main Pilot Course Which Exam is Conducted By DGCA. This course is only for theoretical preparation for the DGCA exams required to obtain a pilot's license.</p>
                            <div className="course-info">
                                <p><strong>Fees:</strong> 2.80 Lakh (25% Scholarship)</p>
                                <p><strong>Duration:</strong> 6 Months</p>
                                <p><strong>Mode:</strong> Offline/Online</p>
                                <p><strong>Batch Start:</strong> Every Month's First & Third Week</p>
                            </div>
                        </div>

                        <div className="course-card">
                            <h3>CPL Flight Training (India/Abroad)</h3>
                            <p>After Clear the DGCA Exam, You Have To do Flying From India And Abroad. 200 Hours of Flying is Must for Obtain Commercial Pilot Licence.</p>
                            <div className="course-info">
                                <p><strong>Flying Duration:</strong> 1 Year (Abroad) / 1.5 Years (India)</p>
                                <p><strong>Fees:</strong> 40 to 50 Lakh (Depends on Country)</p>
                                <p><strong>Registration:</strong> Every Month You Can Apply</p>
                            </div>
                        </div>

                        <div className="course-card">
                            <h3>Commercial Pilot Licence (CPL) Course</h3>
                            <p>This Course is a full-fledged training program that includes both theoretical and practical flight training. We Are The Only Aviation Who provide All Solutions of Aviation Under One Roof</p>
                            <div className="course-info">
                                <p><strong>Full Duration:</strong> 2-3 Years (Depends on Country)</p>
                                <p><strong>Full Fees:</strong> 50-55 Lakh (Depends on Country)</p>
                                <p><strong>Batch Start:</strong> Every First and Third Week of Month</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DGCA Subjects Section */}
            <section className="dgca-subjects">
                <div className="container">
                    <h2>Master Yourself For DGCA Exam With All These Subjects</h2>
                    <div className="subjects-grid">
                        <div className="subject-card">
                            <h3>1. Air Navigation</h3>
                            <p>Air Navigation is the science of safely guiding an aircraft from one point to another using various navigational aids, instruments, and calculations.</p>
                            <button className="subject-btn">Click to explore more! 🚀</button>
                        </div>
                        <div className="subject-card">
                            <h3>2. Air Regulations</h3>
                            <p>Air Regulations are the rules every pilot must follow to ensure safe and legal flying. These laws cover everything from airspace restrictions to communication protocols.</p>
                            <button className="subject-btn">Click to find out more! ✈️</button>
                        </div>
                        <div className="subject-card">
                            <h3>3. Aviation Meteorology</h3>
                            <p>Aviation Meteorology helps pilots understand weather conditions that affect flight safety and performance.</p>
                        </div>
                        <div className="subject-card">
                            <h3>4. Technical General (Aircraft & Engines)</h3>
                            <p>This subject covers the fundamental workings of aircraft and their engines, helping pilots understand how their machines operate.</p>
                        </div>
                        <div className="subject-card">
                            <h3>5. Radio Telephony (RTR)</h3>
                            <p>Radio Telephony (RTR) is the backbone of pilot communication with Air Traffic Control (ATC).</p>
                        </div>
                        <div className="subject-card">
                            <h3>6. Technical Specific (Type of Aircraft)</h3>
                            <p>This subject focuses on the technical details of specific aircraft models, ensuring pilots understand their assigned aircraft inside and out.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="why-choose-us">
                <div className="container">
                    <h2>Why Choose WeOne Aviation Academy</h2>
                    <p className="section-subtitle">All Your Aviation Needs Under One Roof</p>

                    <div className="benefits-grid">
                        <div className="benefit-item">
                            <span className="benefit-check">✅</span>
                            <span>DGCA-Approved Training Programs</span>
                        </div>
                        <div className="benefit-item">
                            <span className="benefit-check">✅</span>
                            <span>Experienced Instructors & Mentors</span>
                        </div>
                        <div className="benefit-item">
                            <span className="benefit-check">✅</span>
                            <span>State-of-the-Art Training Facilities</span>
                        </div>
                        <div className="benefit-item">
                            <span className="benefit-check">✅</span>
                            <span>100% Placement Assistance</span>
                        </div>
                        <div className="benefit-item">
                            <span className="benefit-check">✅</span>
                            <span>Comprehensive CPL & DGCA Ground Classes</span>
                        </div>
                        <div className="benefit-item">
                            <span className="benefit-check">✅</span>
                            <span>Flexible Payment & Loan Options</span>
                        </div>
                        <div className="benefit-item">
                            <span className="benefit-check">✅</span>
                            <span>Personalized Learning Approach</span>
                        </div>
                        <div className="benefit-item">
                            <span className="benefit-check">✅</span>
                            <span>International Training Tie-Ups</span>
                        </div>
                        <div className="benefit-item">
                            <span className="benefit-check">✅</span>
                            <span>Proven Track Record of Success</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Graduates Hired Section */}
            <section className="graduates-hired-section">
                <div className="section-container">
                    <h2 className="section-title">We Deliver 3000+ Pilots To India Since 2011</h2>
                    <p className="section-subtitle">Our alumni are working at top airlines worldwide</p>

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
                            <div className="stat-number">3000+</div>
                            <div className="stat-label">Pilots Trained</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">20+</div>
                            <div className="stat-label">Countries</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">100%</div>
                            <div className="stat-label">DGCA Approved</div>
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

            {/* Training Programs Section */}
            <section className="training-programs">
                <div className="container">
                    <div className="programs-header">
                        <h2>Our Core Training Programs</h2>
                        <p>Expert-led online ground school and specialized preparation courses designed for your success in DGCA exams and beyond.</p>
                    </div>

                    <div className="programs-divider"></div>

                    <div className="programs-grid">
                        <div className="program-card">
                            <div
                                className="program-image"
                                style={{ backgroundImage: `url(${GroundSchool})` }}
                            ></div>
                            <div className="program-content">
                                <h3>CPL & ATPL Ground School</h3>
                                <p>Comprehensive online classes covering all DGCA subjects - Navigation, Meteorology, Regulations, and Technical.</p>
                                <button className="learn-more-btn">Learn More</button>
                            </div>
                        </div>

                        <div className="program-card">
                            <div
                                className="program-image"
                                style={{ backgroundImage: `url(${RTR})` }}
                            ></div>
                            <div className="program-content">
                                <h3>RTR(A) Radio Telephony</h3>
                                <p>Master aviation communication protocols and prepare for the Radio Telephony Restricted (Aeronautical) license exam.</p>
                                <button className="learn-more-btn">Learn More</button>
                            </div>
                        </div>

                        <div className="program-card">
                            <div
                                className="program-image"
                                style={{ backgroundImage: `url(${TypeRatingPrep})` }}
                            ></div>
                            <div className="program-content">
                                <h3>Type Rating Prep</h3>
                                <p>Affordable guidance for A320 & B737 pre/post type rating, covering questions for major airline exams.</p>
                                <button className="learn-more-btn">Learn More</button>
                            </div>
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

            {/* Review Cards Section */}
            <section className="review-section">
                <div className="container">
                    <Slider />
                </div>
            </section>
        </div>
    );
};

export default Home;