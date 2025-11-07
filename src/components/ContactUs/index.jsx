import React, { useState } from "react";
import "./style.css";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        number: "",
        message: "",
    });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Submitting...");

        try {
            // 🟢 Change the URL below to your local backend server
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
        <div className="contact-form-container">
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
    );
};

export default ContactUs;
