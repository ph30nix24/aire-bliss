import { Router } from 'express';
import { getAllProduct } from '../controllers/product.controller.js';

const productRouter = Router();

/**
 * @name fatchAllProduct
 * @route /aire-bliss/products/
 * @access public
 */

productRouter.get("/", getAllProduct);




export default productRouter;