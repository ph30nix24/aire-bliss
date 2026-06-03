import { Router } from 'express';
import { authenticateToken } from '../middlewares/auth.middleware';
const productRouter = Router();

/**
 * @name createProductRoute
 * @route POST /aire-bliss/admin/product/
 * @desc Create a new product
 * @access Private
 */
productRouter.post("/", authenticateToken, createProduct);

export default productRouter;