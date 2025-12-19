import ContactForm from "../models/ContactForm.js";

export const submitForm = async (req, res) => {
    try {
        const { name, email, number, message } = req.body;

        if (!name || !email || !number || !message) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        await ContactForm.create({
            name,
            email,
            number,
            message,
        });

        res.status(201).json({
            success: true,
            message: "Form submitted successfully",
        });
    } catch (error) {
        console.error("Contact Form Error:", error);
        res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
};
