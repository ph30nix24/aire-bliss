import Product from '../models/product.model.js';
import User from '../models/user.model.js';


/**
 * @name getAllProduct
 * @route /aire-bliss/products/
 * @desc fetch all the product
 * @access public
 */
export const getAllProduct = async ( req, res ) => {
    try {
        const products = await Product.find();
        return res.status(200).json({
            message: "fetched all products",
            products
        })
    }
    catch(error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


export const getProduct = async (req, res) => {
    try {
        const { productId } = req.params;
        const product = await Product.findById(productId);

        if(!product) {
            return res.status(404).json({
                status: false,
                message: "Product doesn't exist"
            })
        }

        return res.status(200).json({
            success: true,
            message: "product fetched successfully",
            product
        })
    }
    catch (e) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
