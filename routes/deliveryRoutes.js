import express from 'express';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { roleMiddleware } from '../middleware/roleMiddleware.js';
import {
  viewOrders,
  updateOrderStatus,
} from '../controllers/deliveryController.js';

const router = express.Router();

// Routes for delivery personnel
router.get('/orders', authMiddleware, roleMiddleware('deliveryMan'), viewOrders); // View assigned orders
router.put('/order/:id', authMiddleware, roleMiddleware('deliveryMan'), updateOrderStatus); // Update delivery status

export default router;
