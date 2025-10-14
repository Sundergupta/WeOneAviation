// PassResultsSlider.js

import React, { useState, useRef, useEffect } from 'react';
import './style.css';

// --- PILOT IMAGE IMPORTS (Assuming these paths are correct) ---
import pilot1 from '../../assets/pilot1.webp';
import pilot2 from '../../assets/pilot2.webp';
import pilot3 from '../../assets/pilot3.webp';
// ... (Your other pilot imports)
import pilot4 from '../../assets/pilot4.webp';
import pilot5 from '../../assets/pilot5.webp';
import pilot6 from '../../assets/pilot (6).jpg';
import pilot7 from '../../assets/pilot (7).jpg';
import pilot8 from '../../assets/pilot (8).jpg';
import pilot9 from '../../assets/pilot (9).jpg';
import pilot10 from '../../assets/pilot (10).jpg';
import pilot11 from '../../assets/pilot (11).jpg';
import pilot12 from '../../assets/pilot (12).jpg';
import pilot13 from '../../assets/pilot (13).jpg';
import pilot14 from '../../assets/pilot (14).webp';
import pilot15 from '../../assets/pilot (15).webp';
import pilot16 from '../../assets/pilot (16).webp';


// --- 💡 NEW LOGO IMPORTS (You must add these files to your assets folder!) ---
import indigoLogo from '../../assets/indigo.png';
import spicejet from '../../assets/SpiceJet-Logo.webp';

import airIndiaLogo from '../../assets/air-india-logo.png';
import airIndiaExpress from '../../assets/Air-india-express-logo.png';


// import vistaraLogo from '../../assets/logos/vistara.png';
// import goFirstLogo from '../../assets/logos/gofirst.png';


// --- Dummy Data with Logo Imports ---
const reviewsData = [
    // 💡 Data structure updated: 'airline' field now holds the imported logo image variable.
    { id: 1, name: 'Pilot Alpha', imageSrc: pilot1, airlineLogo: airIndiaLogo },
    { id: 2, name: 'Pilot Bravo', imageSrc: pilot2, airlineLogo: indigoLogo },
    { id: 3, name: 'Pilot Charlie', imageSrc: pilot3, airlineLogo: airIndiaExpress },
    { id: 4, name: 'Pilot Delta', imageSrc: pilot4, airlineLogo: airIndiaExpress },
    { id: 5, name: 'Pilot Echo', imageSrc: pilot5, airlineLogo: indigoLogo },
    { id: 6, name: 'Pilot Foxtrot', imageSrc: pilot6, airlineLogo: airIndiaExpress },
    { id: 7, name: 'Pilot Golf', imageSrc: pilot7, airlineLogo: airIndiaLogo },
    { id: 8, name: 'Pilot Hotel', imageSrc: pilot8, airlineLogo: airIndiaExpress },
    { id: 9, name: 'Pilot India', imageSrc: pilot9, airlineLogo: spicejet },
    { id: 10, name: 'Pilot Juliet', imageSrc: pilot10, airlineLogo: airIndiaLogo },
    { id: 11, name: 'Pilot Kilo', imageSrc: pilot11, airlineLogo: spicejet },
    { id: 12, name: 'Pilot Lima', imageSrc: pilot12, airlineLogo: indigoLogo },
    { id: 13, name: 'Pilot Mike', imageSrc: pilot13, airlineLogo: indigoLogo },
    { id: 14, name: 'Pilot November', imageSrc: pilot14, airlineLogo: spicejet },
    { id: 15, name: 'Pilot Oscar', imageSrc: pilot15, airlineLogo: spicejet },
    { id: 16, name: 'Pilot Papa', imageSrc: pilot16, airlineLogo: airIndiaExpress },
];

const CARD_WIDTH = 250;
const AUTO_SLIDE_INTERVAL = 3000;

const PassResultsSlider = () => {
    const sliderRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalCards = reviewsData.length;

    // --- Auto-Sliding Logic ---
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
        }, AUTO_SLIDE_INTERVAL);
        return () => clearInterval(interval);
    }, [totalCards]);

    // --- Manual Arrow Controls ---
    const slide = (direction) => {
        let newIndex;
        if (direction === 'next') {
            newIndex = (currentIndex + 1) % totalCards;
        } else {
            newIndex = (currentIndex - 1 + totalCards) % totalCards;
        }
        setCurrentIndex(newIndex);
    };

    const slideNext = () => slide('next');
    const slidePrev = () => slide('prev');

    // --- Apply Transform Style ---
    useEffect(() => {
        if (sliderRef.current) {
            const offset = -(currentIndex * CARD_WIDTH);
            sliderRef.current.style.transform = `translateX(${offset}px)`;
        }
    }, [currentIndex]);

    // --- Inline Card Renderer ---
    const renderReviewCard = (review) => {
        // 💡 Destructuring changed: Pulling 'airlineLogo'
        const { id, name, imageSrc, airlineLogo } = review;

        return (
            <div key={id} className="review-card">
                <div className="card-image-container">
                    <img src={imageSrc} alt={`${name}'s photo`} className="card-image" />
                </div>

                <h3 className="pilot-name">{name}</h3>

                {/* 💡 Rendering the Logo Image */}
                <div className="airline-logo-container">
                    <img
                        src={airlineLogo}
                        alt="Airline Logo"
                        className="airline-logo-image"
                    />
                </div>

                {/* Optional checkmark/badge section (You might remove this if unnecessary) */}
                {/* <div className="badges-row">
                    <span className="badge-icon">
                        ✈️
                    </span>
                </div> */}
            </div>
        );
    };

    // --- Main Render Output ---
    return (
        <div className="pass-results-section">
            <div className="results-header">
                <h1>Boasting Outstanding Pass Results</h1>
            </div>

            <div className="slider-container">
                <div className="cards-wrapper" ref={sliderRef}>
                    {reviewsData.map(renderReviewCard)}
                </div>

                {/* Slide Controls */}
                <div className="slider-controls">
                    <button onClick={slidePrev} className="arrow-btn prev-btn">
                        &larr;
                    </button>
                    <button onClick={slideNext} className="arrow-btn next-btn">
                        &rarr;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PassResultsSlider;