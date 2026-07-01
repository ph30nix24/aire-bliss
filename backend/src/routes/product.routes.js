import { Router } from 'express';
import { getAllProduct, getProduct } from '../controllers/product.controller.js';

const productRouter = Router();

/**
 * @name fatchAllProduct
 * @route /aire-bliss/products/
 * @access public
 */

productRouter.get("/", getAllProduct);

/**
 * @name getProduct
 * @desc fetch the requested product
 * @route GET /aire-bliss/products/:productId
 * @access public
 */
productRouter.get("/:productId", getProduct);


export default productRouter;