import { Router } from 'express'
import { authenticateToken } from '../middlewares/auth.middleware.js';
import { addCart, getCart, removeCartItem, updateCartItemQuantity } from '../controllers/cart.controller.js';

const cartRouter = Router();

/**
 * @name getCart
 * @desc fetch all items of cart and return it
 * @route Get /aire-bliss/user/cart/
 * @access private
 */

cartRouter.get('/', authenticateToken, getCart );


/**
 * @name addCart
 * @desc add product into cart
 * @route Post /aire-bliss/user/cart/:productId
 * @access private
 */
cartRouter.post("/:productId", authenticateToken, addCart);



/**
 * @name updateCartItemQuantity
 * @route PATCH /aire-bliss/user/cart/:productId
 * @desc Update the quantity of a product in the authenticated user's cart
 * @access Private
 * @param {string} req.params.productId - The ID of the product to update.
 * @param {number} req.body.quantity - The new quantity for the product.
 */
cartRouter.patch("/:productId", authenticateToken, updateCartItemQuantity)


/**
 * @name removeCartItem
 * @route DELETE /api/user/cart/:productId
 * @desc Remove a product from the authenticated user's cart
 * @param {string} req.params.productId - The ID of the product to remove from the cart.
 */
cartRouter.delete("/:productId", authenticateToken, removeCartItem)



export default cartRouter;