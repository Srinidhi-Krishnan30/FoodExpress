// controllers/adminController.js

import Food from '../models/Food.js';

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

// Get all food items
export const getAllFood = async (req, res) => {
    try {
        const foodItems = await Food.find();
        res.status(200).json(foodItems);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// Delete a food item
export const deleteFood = async (req, res) => {
    const { id } = req.params;

    try {
        await Food.findByIdAndDelete(id);
        res.status(200).json({ message: 'Food deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};
