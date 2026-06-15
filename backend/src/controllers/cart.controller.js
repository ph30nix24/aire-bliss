import Cart from "../models/cart.model.js";
import Product from "../models/product.model.js";



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
        const { productId, quantity } = req.body;
        const userId = req.user._id;

        const product = await Product.findbyId(productId);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "product is missing or not found"
            })
        }

        let cart = await Cart.findOne({
            user: userId
        })

        if (!cart) {
            cart = await Cart.create({
                user: userId,
                products: []
            })
        }

        const existingProduct = cart.products.find(
            (item) => item.product.toString() === productId
        );

        if (existingProduct) {
            existingProduct.quantity += Number(quantity);
        } else {
            cart.products.push({
                product: productId,
                quantity: quantity
            })
        }

        await cart.save();

        await cart.populate("products.product")
        return res.status(200).json({
            success: true,
            message: "Product added to cart",
            cart,
        });

    } catch (e) {
        console.log("Error in getCart ", e.message);
        return res.status(500).json({
            success: false,
            message: e.message
        })
    }
}
