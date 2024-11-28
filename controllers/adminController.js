import Food from '../models/Food.js';
import Order from '../models/Order.js';

// Create new food item (admin only)
export const createFood = async (req, res) => {
    const { name, price, description } = req.body;

    try {
        const newFood = new Food({ name, price, description });
        await newFood.save();
        res.status(201).json({ message: 'Food created successfully', newFood });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// Update food item (admin only)
export const updateFood = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        const updatedFood = await Food.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedFood) {
            return res.status(404).json({ message: 'Food item not found' });
        }
        res.status(200).json({ message: 'Food updated successfully', updatedFood });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// Get all food items
export const getAllFood = async (req, res) => {
    try {
        const foodItems = await Food.find();
        res.status(200).json(foodItems);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// Delete a food item (admin only)
export const deleteFood = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedFood = await Food.findByIdAndDelete(id);
        if (!deletedFood) {
            return res.status(404).json({ message: 'Food item not found' });
        }
        res.status(200).json({ message: 'Food deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// View all orders (admin only)
export const viewOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// Update order status (admin only)
export const updateOrderStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    try {
        const updatedOrder = await Order.findByIdAndUpdate(id, { status }, { new: true });
        if (!updatedOrder) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json({ message: 'Order status updated successfully', updatedOrder });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};
