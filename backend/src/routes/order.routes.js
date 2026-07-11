import { Router } from 'express'
import { authenticateToken } from '../middlewares/auth.middleware.js';
import { addDraftOrderAddress, changeStatus, createDraftOrder, getAllOrders, getOrder } from '../controllers/order.controller.js';


const orderRouter = Router();

orderRouter.get('/', authenticateToken, getAllOrders)

orderRouter.get('/:id', authenticateToken, getOrder)

orderRouter.post('/draft-order', authenticateToken, createDraftOrder)

orderRouter.put('/set-shipping-order/:id', authenticateToken, addDraftOrderAddress)


orderRouter.put('/set-status/:id', authenticateToken, changeStatus);


export default orderRouter;