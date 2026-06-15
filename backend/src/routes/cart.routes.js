import { Router } from 'express'
import { authenticateToken } from '../middlewares/auth.middleware';
import { getCart } from '../controllers/cart.controller';

const cartRouter = Router();

/**
 * @name getCart
 * @desc fetch all items of cart and return it
 * @route /aire-bliss/cart/
 * @access private
 */

cartRouter.get('/', authenticateToken, getCart );

export default cartRouter;
