import express from 'express';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { placeOrder, viewUserOrders } from '../controllers/userController.js';

const router = express.Router();

// Routes for users
router.post('/order', authMiddleware, placeOrder); // Place a new order
router.get('/orders', authMiddleware, viewUserOrders); // View user's orders

export default router;
