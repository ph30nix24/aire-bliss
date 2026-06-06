import Product from '../models/product.model.js';
import { uploadImage } from './imageUpload.controller.js';
import { uploadToCloudinary } from '../services/cloudinary.controller.js'
/**
 * @name createProduct
 * @route POST /aire-bliss/admin/product/create-product
 * @desc Create a new product
 * @access Private
 */
export const createProduct = async (req, res) => {
    // console.log(req.files.previewImages);
    const mainImageURL = await uploadImage(req.files.image[0], req.body.productName);
    const uploadedMainImageURL = await uploadToCloudinary(mainImageURL, "public/temp");
    console.log(uploadedMainImageURL);
}