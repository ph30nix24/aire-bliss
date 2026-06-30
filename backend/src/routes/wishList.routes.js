import { Router } from "express";
import { authenticateToken } from "../middlewares/auth.middleware.js";
import { addToWishlist, getWishlist } from "../controllers/wishlist.controller.js";
import { removeCartItem } from "../controllers/cart.controller.js";

const wishListRouter = Router()

/**
 * @name    getWishList
 * @route   GET /aire-bliss/user/wishlist/
 * @desc    Get authenticated user's wishlist
 * @access  Private
 */

wishListRouter.get("/", authenticateToken, getWishlist);



/**
 * @name    addToWishlist
 * @desc    Add a product to the authenticated user's wishlist
 * @route   POST /aire-bliss/user/wishlist/:productId
 * @access  Private
 */

wishListRouter.post("/:productId", authenticateToken, addToWishlist);



/**
 * @name    removeFromWishlist
 * @desc    Remove a product from the authenticated user's wishlist
 * @route   DELETE /aire-bliss/user/wishlist/:productId
 * @access  Private
 */

wishListRouter.delete("/:productId", authenticateToken, removeCartItem)



export default wishListRouter;