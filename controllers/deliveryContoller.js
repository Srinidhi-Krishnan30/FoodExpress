// controllers/deliveryController.js

import Order from '../models/Order.js';

// View all orders for delivery
export const viewOrders = async (req, res) => {
    try {
        const orders = await Order.find({ status: 'Pending' });  // Only show pending orders
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// Update order status (mark as delivered)
export const updateOrderStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    try {
        const order = await Order.findByIdAndUpdate(id, { status }, { new: true });
        res.status(200).json({ message: 'Order status updated', order });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};
