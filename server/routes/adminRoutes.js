import express from "express"
import { getAllUsers, getAllWinners } from "../controllers/adminController.js"

const router =express.Router();

router.get("/users",getAllUsers);
router.get("/winners",getAllWinners);

export default router;