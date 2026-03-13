// dashboardRoutes.js
import express from "express";
import verifyToken from "../../middleware/Tokenvarify.js";


const Dashboardrouter = express.Router();

// Dashboard
Dashboardrouter.get("/enter", verifyToken, (req, res) => {
    res.status(200).json({ message: `Welcome, ${req.user.username}` });
});

export default Dashboardrouter;
