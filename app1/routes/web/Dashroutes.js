// dashboardRoutes.js
import express from "express";
import verifyToken from "../../middleware/Tokenvarify.js";


const RouterDash = express.Router();

// Dashboard
RouterDash.get("/enter", verifyToken, (req, res) => {
    res.status(200).json({ message: `Welcome, ${req.user.username}` });
});

export default RouterDash;
