import User from '../models/user.model.js';

export const getUserProfile = async (req, res) => {
    const userId = req.params.id;
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
        res.status(500).json({ message: "Server error" });
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