import express from 'express';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { roleMiddleware } from '../middleware/roleMiddleware.js';
import {
  getAssignedOrders,
  updateDeliveryStatus,
} from '../controllers/deliveryController.js';

const router = express.Router();

// Routes for delivery personnel
router.get('/orders', authMiddleware, roleMiddleware('deliveryMan'), getAssignedOrders); // View assigned orders
router.put('/order/:id', authMiddleware, roleMiddleware('deliveryMan'), updateDeliveryStatus); // Update delivery status

export default router;
