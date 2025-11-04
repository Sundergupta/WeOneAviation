import React from "react";
import "./style.css"; // external CSS (file shown below)
// import heroImg from "../assets/pilot-hero.jpg"; // optional - replace with your image or remove

const Tag = ({ text }) => <span className="tag">{text}</span>;

export default function PilotTraining() {
    const tags = [
        "individualised crew training programmes", "igrua exam Delhi", "private pilot syllabus",
        "faa syllabus", "pilot training course Delhi", "aviation medical exam Delhi", "private flying lessons near me",
        "airline funded pilot training Delhi", "best aviation schools Dwarka", "pilot training programs Delhi",
        "course to become a pilot Delhi", "igrua entrance test Dwarka", "top 10 pilot training institute in the world Delhi",
        "aviation colleges near me", "helicopter flight training Dwarka", "pilot medical exam Delhi",
        "qualifications to be a pilot Dwarka", "flight instructor course Delhi", "flight training academy Delhi",
        "pilot training Dwarka", "airlines preparation", "type training A320/B737/ATR"
    ];

    const related = [
        {
            title: "Chartered Services",
            desc: "Book Private Charter aircraft in Dwarka, Delhi — pilot with government authorisation and expertise.",
        },
        {
            title: "Air Craft Sale Purchase",
            desc: "Advisory through full aircraft purchase process for new and used aircraft.",
        },
        {
            title: "Aviation Placement service",
            desc: "Post-training placement support to help student pilots start their careers.",
        },
    ];

    return (
        <div className="pt-page">
            <section className="hero">
                <div className="hero-left">
                    <nav className="breadcrumb">
                        <span>Home</span> <span className="sep">/</span> <strong>Pilot Training</strong>
                    </nav>
                    <h1 className="title">Pilot Training</h1>
                    <p className="hero-sub">
                        Individualised crew training programmes may be built and adapted to meet the specific needs of your aviation employment.
                    </p>
                    <div className="hero-cta">
                        <button className="btn primary">ENQUIRE NOW</button>
                        <a className="btn ghost" href="#more">Click to know more</a>
                    </div>
                </div>

                <div className="hero-right">
                    {/* Replace heroImg with your image path or remove <img> */}
                    {/* <div className="hero-image-wrap">
                        <img src={heroImg} alt="Pilot training" className="hero-image" />
                        <div className="image-badge">Pilot Training</div>
                    </div> */}
                </div>
            </section>

            <main className="content" id="more">
                <article className="lead">
                    <h2 className="section-heading">What we offer</h2>
                    <p>
                        Fly Space Delhi Aviation knows the significance of providing first-rate unique training solutions — contact us to learn more about our
                        ground, base, recurrency, transfer, or upgrade training for your workforce. We also organise the contractual, financial and logistical
                        arrangements required for aircrew training roles.
                    </p>

                    <p>
                        We have assisted several customers in developing flight crew upgrading and fleet transition programmes. We help customers facing maintenance
                        workforce shortages build type rating programmes to ensure a steady supply of maintenance personnel for their flying operations.
                    </p>

                    <p>
                        Our skilled instructors have years of aviation experience; several programmes are led by currently-flying pilots to ensure practical,
                        real-world learning. That is why, each year, thousands of professionals rely on our aviation training courses.
                    </p>

                    <p className="emph">
                        We're here to help your career take off — from safety and service training through Type Rating courses on a B787.
                    </p>

                    <ul className="offer-list">
                        <li>Commercial Pilot Training - CPL</li>
                        <li>Air Transport Pilot License (ATPL)</li>
                        <li>DGCA Ground Classes CPL/ATPL</li>
                        <li>Airlines Preparation</li>
                        <li>Type Training A320 / B737 / ATR</li>
                        <li>Radio Telephony (RTR)</li>
                        <li>Cadet Pilot Program</li>
                    </ul>
                </article>

                <aside className="sidebar">
                    <div className="contact-card">
                        <h3>Contact Us to Know More</h3>
                        <p>We're happy to answer questions and provide programme details.</p>
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
                    <strong>Fly Space Delhi Aviation</strong> — We keep your training objectives at the forefront.
                </div>
                <div className="small">© {new Date().getFullYear()} Fly Space</div>
            </footer>
        </div>
    );
}
