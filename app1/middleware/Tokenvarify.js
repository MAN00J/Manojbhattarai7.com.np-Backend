
import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (!token) return res.status(402).json({ message: token });

    jwt.verify(token, process.env.secretjwt, (err, user) => {
        if (err) return res.status(405).json({ message: "Forbidden: Invalid token" });
        req.user = user;
        next();
    });
};

export default verifyToken;
