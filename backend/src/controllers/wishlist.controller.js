import Product from "../models/product.model.js";
import User from "../models/user.model.js";
import Wishlist from "../models/wishList.model.js";


/**
 * @desc    Get authenticated user's wishlist
 * @route   GET /aire-bliss/v1/wishlist
 * @access  Private
 */
export const getWishlist = async (req, res) => {
    try {
        const wishlist = await Wishlist.findOne({
            user: req.user._id,
        }).populate({
            path: "products.product",
            select: "productName mainImage price discount stock sku shortDescription size",
        });

        return res.status(200).json({
            success: true,
            message: "Wishlist fetched successfully!",
            count: wishlist?.products.length || 0,
            products: wishlist?.products || [],
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


/**
 * @desc    Add a product to the authenticated user's wishlist
 * @route   POST /api/v1/wishlist/:productId
 * @access  Private
 */
export const addToWishlist = async (req, res) => {
    try {
        const { productId } = req.params;

        // Check if the product exists
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found.",
            });
        }

        // Find the user's wishlist
        let wishlist = await Wishlist.findOne({
            user: req.user._id,
        });

        // Create a wishlist if it doesn't exist
        if (!wishlist) {
            wishlist = await Wishlist.create({
                user: req.user._id,
                products: [],
            });
        }

        // Check if the product is already in the wishlist
        const alreadyExists = wishlist.products.some(
            (item) => item.product.toString() === productId
        );

        if (alreadyExists) {
            return res.status(409).json({
                success: false,
                message: "Product already exists in wishlist.",
            });
        }

        // Add the product
        wishlist.products.push({
            product: productId,
        });

        await wishlist.save();

        return res.status(200).json({
            success: true,
            message: "Product added to wishlist successfully.",
            count: wishlist.products.length,
            products: wishlist.products,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


/**
 * @desc    Remove a product from the authenticated user's wishlist
 * @route   DELETE /api/v1/wishlist/:productId
 * @access  Private
 */
export const removeFromWishlist = async (req, res) => {
    try {
        const { productId } = req.params;

        const wishlist = await Wishlist.findOne({
            user: req.user._id,
        });

        if (!wishlist) {
            return res.status(404).json({
                success: false,
                message: "Wishlist not found.",
            });
        }

        const productExists = wishlist.products.some(
            (item) => item.product.toString() === productId
        );

        if (!productExists) {
            return res.status(404).json({
                success: false,
                message: "Product not found in wishlist.",
            });
        }

        wishlist.products = wishlist.products.filter(
            (item) => item.product.toString() !== productId
        );

        await wishlist.save();

        return res.status(200).json({
            success: true,
            message: "Product removed from wishlist successfully.",
            count: wishlist.products.length,
            products: wishlist.products,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

