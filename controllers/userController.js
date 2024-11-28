// controllers/userController.js

import Order from '../models/Order.js';

// Place a new order
export const placeOrder = async (req, res) => {
    const { foodId, quantity } = req.body;

    try {
        const newOrder = new Order({
            user: req.user.id, // user from auth middleware
            food: foodId,
            quantity,
        });

        await newOrder.save();
        res.status(201).json({ message: 'Order placed successfully', newOrder });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// Get all orders for the user
export const viewOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.id });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};
