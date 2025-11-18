import React from "react";
import "./style.css";

const AircraftSalePurchase = () => {
    return (
        <div className="aircraft-page">
            <div className="breadcrumb">
                <p>Home / Air Craft Sale Purchase</p>
            </div>

            <div className="header-section">
                <h1>Air Craft Sale Purchase</h1>
                <button className="enquire-btn">ENQUIRE NOW</button>
            </div>

            <div className="image-section">
                <div className="image-placeholder">image</div>
                <div className="image-placeholder">image</div>
            </div>

            <div className="content-section">
                <p>
                    FLY SPACE has a solid track record of advising customers through the
                    complete aircraft purchase process, both for new and used aircraft.
                </p>
                <p>
                    Once required by the prospective owner, we will conduct extensive
                    consultations to establish the best aircraft category for the customer
                    based on a variety of characteristics, such as:
                </p>

                <ul>
                    <li>Price</li>
                    <li>Age</li>
                    <li>Cabin size and cabin layout</li>
                    <li>Payload</li>
                    <li>Range</li>
                    <li>Performance on the runway</li>
                    <li>The residual value</li>
                    <li>Number of crew members</li>
                </ul>

                <p>
                    We will meet with the customer to understand and develop their needs.
                    We shall prepare a budget for the aircraft's purchase and expected
                    operational expenses early.
                </p>

                <p>
                    Our conversations with the customer will result in a shortlist of
                    desired aircraft types, after which we will find and physically tour
                    viable candidate airframes.
                </p>

                <p>
                    Once a target aircraft has been chosen, we will negotiate the purchase
                    transaction on behalf of the customer to get the best buy and delivery
                    conditions.
                </p>

                <p>
                    The final sale and purchase agreement will detail the transaction's
                    parameters, such as the price, deposit amount, refund terms,
                    scheduling for each phase of the process, location for the pre-buy
                    inspection, representations and warranties, and many other critical
                    aspects.
                </p>

                <p>
                    When the sale and buy agreement is signed, we will organise the
                    aircraft pre-purchase survey using our trusted network of aviation
                    surveyors.
                </p>

                <p>
                    We will create and evaluate the title and accompanying aircraft
                    registration papers. We will generally be present at the aircraft
                    handover to accept possession on behalf of the client and arrange for
                    the new registration in the purchaser's name.
                </p>

                <p>
                    Following the conclusion of the aircraft purchase, we handle any
                    export or importation formalities that may be required for the
                    aircraft to fly safely to its new home base.
                </p>

                <h2>Click here to know:</h2>
                <ul>
                    <li>King Air B200</li>
                    <li>King Air C-90</li>
                    <li>King Air B-350</li>
                    <li>Learjet 45</li>
                    <li>Phenom 100</li>
                    <li>Premier 1A</li>
                    <li>Pilatus Pc 12/47</li>
                    <li>CRJ 100</li>
                    <li>Citation 560Xls</li>
                    <li>Challenger 604</li>
                    <li>Hawker 750/850/900</li>
                    <li>Airbus 320</li>
                    <li>Boeing 737</li>
                    <li>ATR 42/72-600</li>
                </ul>
            </div>

            <div className="related-section">
                <h2>Related Services</h2>
                <div className="related-cards">
                    <div className="card">
                        <h3>Pilot Training</h3>
                        <p>
                            Individualised crew training programmes may be built and adapted to
                            meet the specific needs of your aviation employment.
                        </p>
                        <button>Learn more</button>
                    </div>

                    <div className="card">
                        <h3>Chartered Services</h3>
                        <p>
                            In Dwarka, Delhi, book your Private Charter aircraft. Pilot with
                            government authorisation and expertise.
                        </p>
                        <button>Learn more</button>
                    </div>

                    <div className="card">
                        <h3>Aviation Placement Service</h3>
                        <p>
                            The basic issue with most flight training programmes is a lack of
                            follow-up assistance for students' requirements.
                        </p>
                        <button>Learn more</button>
                    </div>
                </div>
            </div>

            <div className="contact-section">
                <h2>Chat with us on WhatsApp</h2>
                <input type="text" placeholder="Your Phone Number" />
                <textarea placeholder="Write your message here"></textarea>
                <button className="contact-btn">Contact Us to Know More</button>
            </div>
        </div>
    );
};

export default AircraftSalePurchase;
