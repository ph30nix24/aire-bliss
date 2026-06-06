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
        res
        .status(200)
        .json({
            message: "fetched all products",
            products
        })
    }
    catch(error) {
        res
        .status(500)
        .json({
            success: false,
            message: error.message
        })
    }
}
