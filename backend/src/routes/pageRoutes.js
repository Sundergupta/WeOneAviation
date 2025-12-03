import express from "express";
import {
    addPage,
    getPages,
    getPageById,
    updatePage,
    deletePage,
} from "../controllers/pageController.js";

const router = express.Router();

router.post("/", addPage);
router.get("/", getPages);
router.get("/:id", getPageById);
router.put("/:id", updatePage);
router.delete("/:id", deletePage);

export default router;
