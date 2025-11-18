import React, { useState, useEffect } from "react";
import "./style.css";

const ContactUs = () => {
    const [visible, setVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        number: "",
        message: "",
    });
    const [status, setStatus] = useState("");

    // Show popup when user scrolls 30%
    useEffect(() => {
        const handleScroll = () => {
            const scrollPercent =
                (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

            if (scrollPercent > 30) {
                setVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Show popup permanently at bottom
    useEffect(() => {
        setTimeout(() => {
            setVisible(true);
        }, 3000);
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Submitting...");

        try {
            const res = await fetch("http://localhost:5000/api/form", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await res.json();

            if (result.success) {
                setStatus("Form submitted successfully!");
                setFormData({ name: "", number: "", message: "" });
            } else {
                setStatus("Failed to submit form. Try again!");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus("Error submitting form.");
        }
    };

    return (
        <div className={`contact-popup ${visible ? "show" : ""}`}>
            <div className="contact-form-container">
                <button className="close-btn" onClick={() => setVisible(false)}>×</button>

                <h3>Contact Us</h3>
                <form onSubmit={handleSubmit} className="contact-form">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="tel"
                        name="number"
                        placeholder="Your Phone Number"
                        value={formData.number}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <button type="submit">Submit</button>
                </form>

                {status && <p className="form-status">{status}</p>}
            </div>
        </div>
    );
};

export default ContactUs;
