import React from 'react';
// 1. IMPORT YOUR LOCAL IMAGE FILE
import mapImage from '../../assets/map.png'; // Assuming 'map.jpg' is your image file name and path

// Data defining the countries, their positions (as percentages of the map area), 
// and the course information that appears on hover.
const COUNTRIES_DATA = [
    {
        name: 'USA', flag: '🇺🇸', top: '25%', left: '20%',
        courseInfo: 'Advanced Data Science Bootcamp (In-Person & Online)'
    },
    {
        name: 'Canada', flag: '🇨🇦', top: '15%', left: '35%',
        courseInfo: 'Software Engineering Masterclass (Virtual)'
    },
    {
        name: 'Spain', flag: '🇪🇸', top: '50%', left: '48%',
        courseInfo: 'European FinTech Regulation Workshop'
    },
    {
        name: 'Lithuania', flag: '🇱🇹', top: '30%', left: '55%',
        courseInfo: 'Blockchain Fundamentals Certification'
    },
    {
        name: 'Italy', flag: '🇮🇹', top: '38%', left: '55%',
        courseInfo: 'UI/UX Design for Mobile Applications'
    },
    {
        name: 'Bahrain', flag: '🇧🇭', top: '45%', left: '60%',
        courseInfo: 'Middle East Regional Leadership Summit'
    },
    {
        name: 'India', flag: '🇮🇳', top: '52%', left: '65%',
        courseInfo: 'AI & Machine Learning Specialization'
    },
    {
        name: 'Vietnam', flag: '🇻🇳', top: '48%', left: '78%',
        courseInfo: 'Digital Marketing & SEO Strategy Course'
    },
    {
        name: 'South Africa', flag: '🇿🇦', top: '70%', left: '55%',
        courseInfo: 'Renewable Energy Project Management'
    },
    {
        name: 'Australia', flag: '🇦🇺', top: '70%', left: '80%',
        courseInfo: 'Cloud Infrastructure Management Certification'
    },
    {
        name: 'New Zealand', flag: '🇳🇿', top: '80%', left: '85%',
        courseInfo: 'Cyber Security Essentials for Small Businesses'
    },
];

// Helper component for the flag and name display (PinLabel)
const PinLabel = ({ flag, name }) => (
    // Tailwind classes used for aesthetic styling
    <div className="flex items-center space-x-2 p-2 bg-white rounded-lg shadow-md border border-gray-100">
        <span className="text-xl">{flag}</span>
        <span className="text-sm font-semibold text-gray-800">{name}</span>
    </div>
);

// The core component for each country pin (CountryPin)
const CountryPin = ({ data }) => {
    // Styles for positioning the pin on the map
    const pinStyle = {
        top: data.top,
        left: data.left,
    };

    return (
        <div className="country-pin-wrapper group" style={pinStyle}>
            {/* 1. The main visible pin label (positioned via CSS transform) */}
            <div className="pin-label-visible">
                <PinLabel flag={data.flag} name={data.name} />
            </div>

            {/* 2. The small pin shadow/marker */}
            <div className="pin-marker"></div>

            {/* 3. The hover information tooltip (hidden by default, shown on group-hover) */}
            <div className="tooltip-hidden group-hover:tooltip-visible">
                <div className="tooltip-content shadow-xl">
                    <p className="text-xs font-medium text-blue-900 leading-tight">
                        {data.courseInfo}
                    </p>
                    <div className="tooltip-arrow"></div>
                </div>
            </div>
        </div>
    );
};

// Main App Component
const Map = () => {
    // 2. Use the imported image in an inline style object for the background div.
    // This is the cleanest way to integrate a local asset in a React component's JSX.
    const mapBackgroundStyle = {
        backgroundImage: `url(${mapImage})`,
    };

    return (
        <>
            {/* NOTE: This style block is kept for other global styles and Pin CSS */}
            <style>{`
        /* 1. Custom Font */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f7f9fc;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        /* 2. Map Container Styles */
        .map-wrapper {
          position: relative; 
          width: 90vw;
          max-width: 1200px;
          height: 50vw; 
          max-height: 600px;
          margin: 0 auto;
          background-color: #fcfcfc;
          border-radius: 2rem;
          box-shadow: 0 10px 30px rgba(13, 71, 161, 0.08); 
          overflow: hidden;
        }
        
        /* 3. Background Map Graphic (The background-image will be overridden by the inline style below) */
        .world-map-graphic {
          position: absolute;
          width: 100%;
          height: 100%;
          /* Original background-image is commented out or ignored by the inline style */
          /* background-image: url('https://upload.wikimedia.org/wikipedia/commons/8/87/World_Map_Blank_Grey.svg'); */
          background-size: 100% 100%; /* Adjust size to cover the whole container */
          background-repeat: no-repeat;
          background-position: center center;
          
          /* Applying styles to make it subtle and dotted/shadowed */
          opacity: 1.0; /* Increased opacity to show the image clearly */
          filter: grayscale(0%) blur(0px); /* Removed filter for a clear image */
          
          /* Removed Dotted Overlay for clarity with a custom map */
          /* mask-image: radial-gradient(...); */
        }

        /* 4. Pin and Tooltip Positioning (Remaining CSS is the same) */
        .country-pin-wrapper {
          position: absolute;
          z-index: 10;
          cursor: pointer;
        }
        
        /* ... (rest of the CSS) ... */

        .pin-label-visible {
          transform: translate(-50%, -100%); 
        }

        .pin-marker {
          width: 10px;
          height: 10px;
          background-color: #0d47a1;
          border-radius: 50%;
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          box-shadow: 0 0 0 4px rgba(13, 71, 161, 0.3);
        }

        /* 5. Tooltip (Hidden by Default) */
        .tooltip-hidden {
          position: absolute;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          z-index: 20;
          top: -120%; 
          left: 50%;
          transform: translateX(-50%) scale(0.95);
          transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s;
        }

        .country-pin-wrapper:hover .tooltip-hidden {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) scale(1);
          pointer-events: auto;
        }

        .tooltip-content {
          background-color: #e3f2fd; 
          color: #0d47a1; 
          padding: 10px 14px;
          border-radius: 8px;
          white-space: nowrap; 
          position: relative;
        }

        /* Tooltip Arrow */
        .tooltip-arrow {
          width: 0;
          height: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-top: 8px solid #e3f2fd; 
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
        }

        /* Responsive adjustments for mobile */
        @media (max-width: 768px) {
            .title-section {
                padding: 1rem;
            }
            .map-wrapper {
                height: 70vw;
            }
            .title {
                font-size: 2rem;
            }
            .pin-label-visible {
                transform: translate(-50%, -100%) scale(0.8); 
            }
            .tooltip-content {
                padding: 8px 10px;
                white-space: normal; 
                max-width: 150px;
            }
        }
      `}</style>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-center p-4 w-full max-w-7xl mx-auto">
                {/* Title Section */}
                <div className="title-section p-8 md:p-12 w-full md:w-1/3">
                    <h1 className="title text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight">
                        Global Training <br /> Foot Print
                    </h1>
                    <p className="text-gray-500 mt-4 text-lg">
                        Hover over a location to see the flagship course offered in that region.
                    </p>
                </div>

                {/* Map Section */}
                <div className="map-wrapper w-full md:w-2/3">
                    {/* Background Map Graphic: Apply the inline style here */}
                    <div className="world-map-graphic" style={mapBackgroundStyle}></div>

                    {/* Render all country pins */}
                    {COUNTRIES_DATA.map((country) => (
                        <CountryPin key={country.name} data={country} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Map;