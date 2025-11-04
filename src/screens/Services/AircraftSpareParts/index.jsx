import React from "react";
import "./style.css";
// import image1 from "../../assets/AircraftSpareParts/image1.jpg";
// import image2 from "../../assets/AircraftSpareParts/image2.jpg";

const AircraftSpareParts = () => {
    return (
        <div className="dynamic-page">
            {/* ---------- HEADER ---------- */}
            <div className="header-section">
                <h2>Aircraft Spare Parts</h2>
                <p>
                    Home <span>/ Aircraft Spare Parts</span>
                </p>
            </div>

            {/* ---------- IMAGES ---------- */}
            {/* 
            <div className="image-section">
                <img src={image1} alt="Aircraft Spare Parts" />
                <img src={image2} alt="Aircraft Parts Storage" />
            </div>
            */}

            {/* ---------- CONTENT ---------- */}
            <div className="content-section">
                <h2>ENQUIRE NOW</h2>
                <p>
                    FLY SPACE also specialises in providing dedicated, competent, and
                    diligent multidisciplinary human resources who are subject matter
                    experts in their respective disciplines. We can transform chances into
                    contract order placements and deploy indigenous cost-effective support
                    services.
                </p>
                <p>
                    We run our company by relying on management teams and delegating
                    decision-making to them so that they can understand and address the
                    unique needs of our customers and communities. Our experienced staff
                    is familiar with our market-focused business procedures and strategies,
                    and they understand that our primary goal is continuous progress.
                </p>
                <p>
                    FLY SPACE is customer-oriented and adaptable, with a firm awareness
                    that quality and value must govern our company strategy.
                </p>

                <ul>
                    <li>We do business in a secure atmosphere governed by ethical standards and laws.</li>
                    <li>Our policies, rules, and regulations guarantee effective and efficient services.</li>
                    <li>We respect that change is continuous and allows us to learn about our customers’ requirements.</li>
                    <li>We constantly assess our business processes to maintain client satisfaction.</li>
                    <li>We recognise our duty to provide consistent and timely information to our customers.</li>
                </ul>

                <p>
                    Choosing FLY SPACE as your aviation supply partner helps you to
                    efficiently manage the logistics of hundreds or thousands of aircraft
                    components required by your business. Our highly skilled personnel
                    enable clients with aircraft-on-ground (AOG) or other urgent needs to
                    receive their components swiftly and affordably — always maintaining
                    the highest levels of customer satisfaction.
                </p>

                <p>
                    This allows us to develop effective methods of delivering
                    high-quality client service.
                </p>

                <h3>Click here to know more:</h3>
                <ul className="service-links">
                    <li>Consumable Support</li>
                    <li>Special Tools</li>
                    <li>Ground Support Equipment</li>
                    <li>Aircraft Tires</li>
                    <li>Customer Clearance</li>
                    <li>Dangerous Goods Handling</li>
                    <li>Life Rafts</li>
                    <li>Floating Device</li>
                    <li>Propellers</li>
                </ul>

                <p className="tags">
                    <strong>Tags:</strong> fly star, customer satisfaction, aviation supply partner,
                    logistics, aircraft components, AOG, effective services, multidisciplinary experts,
                    business strategy, continuous improvement, decision-making, ethical standards,
                    regulations, cost-effective support services, client service.
                </p>
            </div>

            {/* ---------- RELATED SERVICES ---------- */}
            <div className="related-section">
                <h2>Related Services</h2>
                <div className="related-services">
                    <div className="related-card">
                        <h3>Pilot Training</h3>
                        <p>
                            Individualised crew training programmes adapted to your aviation
                            employment requirements.
                        </p>
                        <button>Learn more</button>
                    </div>

                    <div className="related-card">
                        <h3>Chartered Services</h3>
                        <p>
                            In Dwarka, Delhi, book your Private Charter aircraft with licensed
                            and experienced pilots.
                        </p>
                        <button>Learn more</button>
                    </div>

                    <div className="related-card">
                        <h3>Aircraft Management</h3>
                        <p>
                            Delivering cost savings and premium service in all areas of
                            aircraft ownership and management.
                        </p>
                        <button>Learn more</button>
                    </div>
                </div>
            </div>

            {/* ---------- CHAT SECTION ---------- */}
            <div className="chat-section">
                <h3>Chat with us on WhatsApp</h3>
                <input type="text" placeholder="Your Phone Number" />
                <textarea rows="4" placeholder="Write your message here"></textarea>
                <button>Contact Us to Know More</button>
            </div>
        </div>
    );
};

export default AircraftSpareParts;
