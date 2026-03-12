// dashboardRoutes.js
import express from "express";
import verifyToken from "../../middleware/Tokenvarify.js";


const router = express.Router();

// Dashboard
router.get("/enter", verifyToken, (req, res) => {
    res.status(200).json({ message: `Welcome, ${req.user.username}` });
});

export default router;
