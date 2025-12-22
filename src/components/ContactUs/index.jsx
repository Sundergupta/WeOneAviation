import React, { useState } from "react";
import "./style.css";

// ✅ CHANGE THIS TO YOUR LIVE BACKEND URL
const API_URL = "https://weoneaviation.com/api/form";

const ContactUs = () => {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);

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

        setLoading(true);
        setStatus("Submitting...");

        try {
            const res = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            // ❌ Backend not reachable
            if (!res.ok) {
                throw new Error("Server error");
            }

            const result = await res.json();

            if (result.success) {
                setStatus("Form submitted successfully!");
                setFormData({
                    name: "",
                    email: "",
                    number: "",
                    message: "",
                });
            } else {
                setStatus(result.message || "Submission failed.");
            }
        } catch (error) {
            console.error("Form submit error:", error);
            setStatus("Unable to submit form. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* 👉 QUERY TAB */}
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
                            disabled={loading}
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            disabled={loading}
                            required
                        />

                        <input
                            type="tel"
                            name="number"
                            placeholder="Your Phone Number"
                            value={formData.number}
                            onChange={handleChange}
                            disabled={loading}
                            required
                        />

                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            disabled={loading}
                            required
                        />

                        <button type="submit" disabled={loading}>
                            {loading ? "Submitting..." : "Submit"}
                        </button>
                    </form>

                    {status && <p className="form-status">{status}</p>}
                </div>
            </div>
        </>
    );
};

export default ContactUs;
