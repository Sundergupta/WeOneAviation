const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// POST /api/form
router.post("/", async (req, res) => {
    try {
        const { name, number, message } = req.body;

        const newContact = new Contact({ name, number, message });
        await newContact.save();

        res.json({ success: true, msg: "Form data saved!" });
    } catch (error) {
        console.error(error);
        res.json({ success: false, msg: "Error saving form" });
    }
});

module.exports = router;
