import express from "express";
import { submitForm } from "../controllers/formController.js";

const router = express.Router();

// POST → /api/form
router.post("/", submitForm);

export default router;
