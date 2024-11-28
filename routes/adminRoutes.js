import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import checkRole from '../middleware/roleCheck.js';
import {
    createFood,
    updateFood,
    deleteFood,
    getAllFood,
    viewOrders,
    updateOrderStatus,
} from '../controllers/adminController.js';

const router = express.Router();

// Routes for food management (Admin only)
router.post('/food', authMiddleware, roleMiddleware('admin'), createFood);
router.put('/food/:id', authMiddleware, roleMiddleware('admin'), updateFood);
router.delete('/food/:id', authMiddleware, roleMiddleware('admin'), deleteFood);
router.get('/food', authMiddleware, roleMiddleware('admin'), getAllFood);

// Routes for order management (Admin only)
router.get('/orders', authMiddleware, roleMiddleware('admin'), viewOrders);
router.put('/order/:id', authMiddleware, roleMiddleware('admin'), updateOrderStatus);

export default router;
