import { Router } from 'express'
import { authenticateToken } from '../middlewares/auth.middleware.js';
import { createDraftOrder, getAllOrders } from '../controllers/order.controller.js';


const orderRouter = Router();

orderRouter.get('/', authenticateToken, getAllOrders)

orderRouter.post('/draft-order', authenticateToken, createDraftOrder)


export default orderRouter;