import Product from '../models/product.model.js';
import { uploadImage } from './imageUpload.controller.js';

/**
 * @name createProduct
 * @route POST /aire-bliss/admin/product/create-product
 * @desc Create a new product
 * @access Private
 */
export const createProduct = async (req, res) => {
    // console.log(req.body);
    console.log(req.files.image);
    // console.log(req.files.previewImages);
    const mainImageURL = await uploadImage(req.files.image[0], req.body.name);
    console.log(mainImageURL);
}