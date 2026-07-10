import { Router } from 'express'
import { authenticateToken } from '../middlewares/auth.middleware.js';
import { addDraftOrderAddress, createDraftOrder, getAllOrders } from '../controllers/order.controller.js';


const orderRouter = Router();

orderRouter.get('/', authenticateToken, getAllOrders)

orderRouter.post('/draft-order', authenticateToken, createDraftOrder)

orderRouter.put('/set-shipping-order', authenticateToken, addDraftOrderAddress)


export default orderRouter;