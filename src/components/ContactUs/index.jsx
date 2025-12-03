import React, { useState } from "react";
import "./style.css";

const ContactUs = () => {
    const [visible, setVisible] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        number: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.number || !formData.message) {
            setStatus("Please fill in all fields.");
            return;
        }

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
                setFormData({ name: "", email: "", number: "", message: "" });
            } else {
                setStatus("Failed to submit form.");
            }
        } catch (error) {
            setStatus("Error submitting form.");
        }
    };

    return (
        <>
            {/* 👉 QUERY TAB ON RIGHT SIDE */}
            {!visible && (
                <div className="query-tab" onClick={() => setVisible(true)}>
                    Query
                </div>
            )}

            {/* 👉 POPUP FORM */}
            <div className={`contact-popup ${visible ? "show" : ""}`}>
                <div className="contact-form-container">

                    {/* Close Button */}
                    <button className="close-btn" onClick={() => setVisible(false)}>
                        ×
                    </button>

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
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
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
        </>
    );
};

export default ContactUs;
