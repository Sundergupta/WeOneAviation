import React from "react";
import "./style.css"; // External CSS file
// import heroImg from "../assets/chartered-hero.jpg"; // Replace with your image path

const Tag = ({ text }) => <span className="tag">{text}</span>;

export default function CharteredServices() {
    const tags = [
        "dwarka", "team", "highly qualified pilots", "ground handling crew",
        "engineering", "fly star", "years", "chartering company services",
        "efficient methods", "highly skilled personnel", "experienced", "management team",
        "corporate air jet fleet", "low-cost private jet", "call immediately", "business travel requirements",
        "confident", "fly star company", "helicopter services", "private charter aircraft",
        "delhi", "competent support services employees"
    ];

    const related = [
        {
            title: "Pilot Training",
            desc: "Individualised crew training programmes tailored to aviation employment needs.",
        },
        {
            title: "Air Craft Sale Purchase",
            desc: "Expert advisory through the full aircraft purchase process for new and used aircraft.",
        },
        {
            title: "Aviation Placement service",
            desc: "Follow-up support and placement for student pilots completing flight training.",
        },
    ];

    return (
        <div className="cs-page">
            <section className="hero">
                <div className="hero-left">
                    <nav className="breadcrumb">
                        <span>Home</span> <span className="sep">/</span> <strong>Chartered Services</strong>
                    </nav>
                    <h1 className="title">Chartered Services</h1>
                    <p className="hero-sub">
                        In Dwarka, Delhi, book your Private Charter aircraft. Pilot with government authorisation and expertise.
                    </p>
                    <div className="hero-cta">
                        <button className="btn primary">ENQUIRE NOW</button>
                        <a className="btn ghost" href="#more">Click to know more</a>
                    </div>
                </div>

                <div className="hero-right">
                    {/* <div className="hero-image-wrap">
                        <img src={heroImg} alt="Chartered Services" className="hero-image" />
                        <div className="image-badge">Chartered Services</div>
                    </div> */}
                </div>
            </section>

            <main className="content" id="more">
                <article className="lead">
                    <h2 className="section-heading">About Our Charter Services</h2>
                    <p>
                        In Delhi, FLY SPACE offers private jets for individuals or businesses — available 24/7. We provide luxury private jet and helicopter
                        services across India. Established in 2014, with over 18 years in Air Charters, we ensure your business travel needs are met efficiently.
                    </p>

                    <p>
                        The management team, comprised of experienced and highly skilled personnel, has created efficient processes that streamline chartering services.
                        FLY SPACE operates in-house air operations, engineering, and maintenance, supported by qualified pilots and a motivated ground handling crew.
                    </p>

                    <p className="emph">
                        Call immediately for low-cost private jets, business, or corporate air jet fleets — tailored to your requirements.
                    </p>

                    <ul className="offer-list">
                        <li>King Air B200</li>
                        <li>King Air C-90</li>
                        <li>King Air B-350</li>
                        <li>Learjet 45</li>
                        <li>Phenom 100</li>
                        <li>Premier 1A</li>
                        <li>Pilatus PC 12/47</li>
                        <li>CRJ 100</li>
                        <li>Citation 560XLS</li>
                        <li>Challenger 604</li>
                        <li>Hawker 750/850/900</li>
                        <li>Air Ambulance</li>
                    </ul>
                </article>

                <aside className="sidebar">
                    <div className="contact-card">
                        <h3>Contact Us to Know More</h3>
                        <p>Reach out for private jet booking and charter service information.</p>
                        <a className="btn primary full" href="/contact">Contact Us</a>
                    </div>

                    <div className="tags-card">
                        <h4>Tags</h4>
                        <div className="tags">
                            {tags.map((t, i) => <Tag key={i} text={t} />)}
                        </div>
                    </div>
                </aside>

                <section className="related">
                    <h3>Related services</h3>
                    <div className="related-grid">
                        {related.map((r, i) => (
                            <div className="related-card" key={i}>
                                <h4>{r.title}</h4>
                                <p>{r.desc}</p>
                                <a className="learn-more" href="#">Learn more</a>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <footer className="footer">
                <div>
                    <strong>Fly Space Delhi Aviation</strong> — Private jet and charter excellence since 2014.
                </div>
                <div className="small">© {new Date().getFullYear()} Fly Space</div>
            </footer>
        </div>
    );
}
