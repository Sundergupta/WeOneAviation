import React from "react";
import states from "../../components/MapData";
import "./style.css";

const StatesCards = () => {
    return (
        <div className="cards-container">
            {states.map((state, index) => (
                <div key={index} className="card">
                    <h3>{state.name}</h3>
                    <p>{state.introduction}</p>
                    <a href={state.link} target="_blank" rel="noopener noreferrer" className="card-link">
                        Learn More
                    </a>
                </div>
            ))}
        </div>
    );
};

export default StatesCards;
