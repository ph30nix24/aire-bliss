import User from '../models/user.model.js';
import Cart from '../models/cart.model.js';
import WishList from '../models/wishList.model.js'
import Address from '../models/address.model.js'

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

        let cartLength = 0;
        const cart = await Cart.findOne(userId)
        if(cart) {
            cartLength = cart.products.length
        }

        const wishlist = await Wishlist.findOne(userId);
        
        const addresses = await Address.find({
            user: userId
        });

        res.status(200).json({
            success: true,
            user,
            cart: cartLength,
            wishlist,
            addresses,
            message: "User profile fetched successfully",
        });
    } catch (error) {
        res.status(500).json({ message: `Server error ${error.message}` });
    }
}

