import User from '../models/user.model.js';


/**
 * @name getUserProfile
 * @route /aire-bliss/user/get-me
 * @desc fetch user from database
 * @returns user
 */

export const getUserProfile = async (req, res) => {
    const userId = req.user.id;
    try {
        const user = await User.findById(userId).select('-password');
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({
            user,
            message: "User profile fetched successfully"
        });
    } catch (error) {
        res.status(500).json({ message: `Server error ${error.message}` });
    }
}

export const allUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.status(200).json({
            users,
            message: "All users fetched successfully"
        });
    }
    catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}