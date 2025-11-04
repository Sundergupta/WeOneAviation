import React from "react";
import "./style.css";

const AviationPlacementService = () => {
    return (
        <div className="placement-page">
            <div className="breadcrumb">
                <p>Home / Aviation Placement service</p>
            </div>

            <div className="header-section">
                <h1>Aviation Placement service</h1>
                <button className="enquire-btn">ENQUIRE NOW</button>
            </div>

            <div className="image-section">
                <div className="image-placeholder">image</div>
                <div className="image-placeholder">image</div>
            </div>

            <div className="content-section">
                <p>
                    The basic issue with 99% of the flight training programmes is a need for
                    follow-up assistance for students' requirements. This implies that 99% of
                    student pilots who complete flight training programmes are dismissed by
                    their flight schools and are forced to hunt for work with just 200–250
                    hours of flying experience and a basic CPL. And doing so puts the
                    newly-minted pilots up for career failure: looking for work with such poor
                    credentials leads to unemployment, misery, desperation, and the expiry of
                    pilot money.
                </p>

                <p>
                    FLY SPACE's top recruitment airline specialists have altered this: our
                    programmes are carefully built to students' requirements — your
                    requirements. We understand what it takes to get your ideal airline career.
                    We have developed our programmes so that our graduates get valuable pilot
                    job experience, accumulate many flying hours, and are airline career-ready
                    immediately after graduation. And we stand by you and assure you of
                    permanent work with one of the world's biggest airlines within six months
                    of completing our programme.
                </p>

                <p>
                    So, welcome to your new home. Welcome to the place where you are well taken
                    care of. FLY SPACE would like to welcome you.
                </p>

                <h2>Click here to know more:</h2>
                <ul>
                    <li>Ground staff</li>
                    <li>Engineering</li>
                    <li>Pilot</li>
                    <li>Cabin crew</li>
                    <li>Administration</li>
                    <li>Commercial</li>
                    <li>Flight safety</li>
                    <li>Aviation training</li>
                </ul>
            </div>

            <div className="related-section">
                <h2>Related Services</h2>
                <div className="related-cards">
                    <div className="card">
                        <h3>Pilot Training</h3>
                        <p>
                            Individualised crew training programmes may be built and adapted to meet
                            the specific needs of your aviation employment.
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
                        <h3>Air Craft Sale Purchase</h3>
                        <p>
                            FLY SPACE has a solid track record of advising customers through the
                            complete aircraft purchase process, both for new and used aircraft.
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

export default AviationPlacementService;
