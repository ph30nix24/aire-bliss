import User from '../models/user.model.js';
import Cart from '../models/cart.model.js';
import WishList from '../models/wishList.model.js'
import Address from '../models/address.model.js';
import Order from '../models/order.model.js';

/**
 * @name getUserProfile
 * @route /aire-bliss/user/
 * @desc fetch user from database
 * @returns user
 */

export const getUserProfile = async (req, res) => {
    try {
        const user = req.user

        const { verificationOTP: userOtp, verificationOTPExpires: userVerificationOTPExpires, ...safeUser } = user._doc;

        const cart = await Cart.findOne({
            user: req.user._id
        })

        const totalCartLength = cart?.products.length || 0

        const wishlist = await WishList.findOne({
            user: req.user._id
        });

        const totalWishlistProduct = wishlist?.products.length || 0;

        const totalAddresses = await Address.countDocuments({
            user: req.user._id
        });

        const totalOrders = await Order.countDocuments({
            user: req.user.id
        })



        res.status(200).json({
            success: true,
            user: safeUser,
            totalCartLength,
            totalWishlistProduct,
            totalAddresses,
            totalOrders,
            message: "User profile fetched successfully",
        });
    } catch (error) {
        res.status(500).json({ message: `Server error ${error.message}` });
    }
}


/**
 * @desc    Update authenticated user's profile
 * @route   PUT /api/user/
 * @access  Private
 */
export const updateProfile = async (req, res) => {
    try {
        const { name, phoneNo, gender, dateOfBirth } = req.body;
        console.log(1)
        const updatedUser = await User.findByIdAndUpdate(
            req.user.id,
            {
                $set: {
                    ...(name !== undefined && { name }),
                    ...(phoneNo !== undefined && { phoneNo }),
                    ...(gender !== undefined && { gender }),
                    ...(dateOfBirth !== undefined && { dateOfBirth }),
                },
            },
            {
                new: true,
                runValidators: true,
            }
        ).select("-password");
        console.log(2)
        if (!updatedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found.",
            });
        }  
        console.log(3)

        return res.status(200).json({
            success: true,
            message: "Profile updated successfully.",
            user: updatedUser,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

