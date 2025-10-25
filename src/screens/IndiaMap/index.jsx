import React from "react";
import StatesCards from "./../statescard";
import "./style.css";

const MapPage = () => {
    return (
        <div className="map-page">
            <div className="map-section">
                <br />
                <h2>Explore Pilot Training Locations Across India</h2>
                <img
                    src="https://t4.ftcdn.net/jpg/04/40/23/03/360_F_440230363_XSuL2zbW8iRLTi66tsfIwWLIGo3Reo62.jpg"
                    alt="India Map"
                    className="india-map"
                />
            </div>
            <StatesCards />
        </div>
    );
};

export default MapPage;
