import jwt from "jsonwebtoken";
import BlackList from "../models/blackList.Model.js"

/**
 * @name authenticateToken
 * @desc Middleware to authenticate JWT token and reject blacklisted tokens
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
export const authenticateToken = async (req, res, next) => {
    const token = req.cookies?.token;

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized. Please login.",
        });
    }

    try {
        // Check if token is blacklisted
        const blacklistedToken = await BlackList.findOne({ token });

        if (blacklistedToken) {
            return res.status(401).json({
                success: false,
                message: "Session has expired. Please login again.",
            });
        }

        // Verify JWT
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;

        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token.",
        });
    }
};