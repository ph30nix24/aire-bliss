import Cart from "../models/cart.model.js";
import Product from "../models/product.model.js";



const calculateCartTotals = (cart) => {
    const totalItems = cart.products.reduce(
        (total, item) => total + item.quantity,
        0
    );


    const totalPrice = cart.products.reduce(
        (total, item) => total + item.quantity * item.product.price,
        0
    );

    const totalDiscount = cart.products.reduce((total, item) => total + item.quantity * item.product.discount, 0);

    const shippingCharge = totalPrice >= 999 ? 0 : 99;

    const finalPrice =
        totalPrice -
        totalDiscount +
        shippingCharge;

    cart.totalItems = totalItems;
    cart.totalPrice = totalPrice;
    cart.totalDiscount = totalDiscount;
    cart.shippingCharge = shippingCharge;
    cart.finalPrice = finalPrice;
};

/**
 * @name getCart
 * @desc fetch all the cart items and return
 * @route /aire-bliss/cart/
 * @param userID 
 * @access private
*/

export const getCart = async (req, res) => {
    try {
        const userId = req.user._id;

        const cart = await Cart.findOne({
            user: userId,
        }).populate("products.product");


        if (!cart) {
            return res.status(404).json({
                success: false,
                message: "cart not found"
            });
        }

        return res.status(200).json({
            success: true,
            cart,
            message: "cart successfully fetched",
        })
    }
    catch (e) {
        console.log("Error in getCart ", e.message);
        return res.status(500).json({
            success: false,
            message: e.message
        })
    }
}



/**
 * @name addCart
 * @desc add product into cart
 * @route /aire-bliss/cart/add-cart
 * @require user-id, product-id, quantity
 * @access private
*/
export const addCart = async (req, res) => {
    try {
        const { productId } = req.params;

        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found.",
            });
        }

        let cart = await Cart.findOne({ user: req.user._id });

        if (!cart) {
            cart = await Cart.create({
                user: req.user._id,
                products: [],
            });
        }

        const existingProduct = cart.products.find(
            (item) => item.product.toString() === productId
        );

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.products.push({
                product: productId,
                quantity: 1,
            });
        }

        await cart.populate("products.product");

        calculateCartTotals(cart);
        await cart.save();

        return res.status(200).json({
            success: true,
            message: "Product added to cart successfully.",
            cart,
        });
    } catch (error) {

        console.error("Error in addCart:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error.",
        });
    }
};


/**
 * @desc Update the quantity of a product in the authenticated user's cart
 * @route PATCH /api/cart/:productId
 * @access Private
 *
 * @param {string} req.params.productId - The ID of the product to update.
 * @param {number} req.body.quantity - The new quantity for the product.
 *
 * @returns {Object} 200 - Cart updated successfully with updated cart data.
 * @returns {Object} 400 - Invalid quantity or requested quantity exceeds available stock.
 * @returns {Object} 404 - Cart or product not found.
 * @returns {Object} 500 - Internal server error.
 */
export const updateCartItemQuantity = async (req, res) => {
    try {
        const { productId } = req.params;
        const { quantity } = req.body;

        if (!quantity || quantity < 1) {
            return res.status(400).json({
                success: false,
                message: "Quantity must be at least 1.",
            });
        }

        const cart = await Cart.findOne({ user: req.user._id }).populate("products.product");

        if (!cart) {
            return res.status(404).json({
                success: false,
                message: "Cart not found.",
            });
        }

        const cartItem = cart.products.find(
            (item) => item.product._id.toString() === productId
        );

        if (!cartItem) {
            return res.status(404).json({
                success: false,
                message: "Product not found in cart.",
            });
        }

        if (quantity > cartItem.product.stock) {
            return res.status(400).json({
                success: false,
                message: `Only ${cartItem.product.stock} item(s) available in stock.`,
            });
        }

        cartItem.quantity = quantity;

        calculateCartTotals(cart);

        await cart.save();

        return res.status(200).json({
            success: true,
            message: "Cart updated successfully.",
            cart,
        });
    } catch (error) {
        console.error("Update Cart Quantity Error:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error.",
        });
    }
};



/**
 * @desc Remove a product from the authenticated user's cart
 * @route DELETE /api/cart/:productId
 * @access Private
 *
 * @param {string} req.params.productId - The ID of the product to remove from the cart.
 *
 * @returns {Object} 200 - Product removed successfully with updated cart data.
 * @returns {Object} 404 - Cart or product not found in the cart.
 * @returns {Object} 500 - Internal server error.
 */
export const removeCartItem = async (req, res) => {
    try {
        const { productId } = req.params;

        const cart = await Cart.findOne({ user: req.user._id }).populate("products.product");
        if (!cart) {
            return res.status(404).json({
                success: false,
                message: "Cart not found.",
            });
        }

        const cartItem = cart.products.find(
            (item) => item._id.toString() === productId
        );

        if (!cartItem) {
            return res.status(404).json({
                success: false,
                message: "Product not found in cart.",
            });
        }

        cart.products = cart.products.filter(
            (item) => item._id.toString() !== productId
        );
        calculateCartTotals(cart);

        await cart.save();

        return res.status(200).json({
            success: true,
            message: "Product removed from cart successfully.",
            cart,
        });
    } catch (error) {
        console.error("Remove Cart Item Error:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error.",
        });
    }
};


