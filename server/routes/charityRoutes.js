import express from "express"
import { createCharity,getCharities,selectCharity } from "../controllers/charityController.js"

import authMiddleware from "../middleware/authMiddleware.js"

const router =express.Router();

router.post("/create",createCharity);
router.get("/",getCharities);
router.post("/select",authMiddleware,selectCharity);

export default router;