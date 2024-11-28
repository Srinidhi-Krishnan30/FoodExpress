// src/server.js

import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/dbConnect.js';  // Adjust the path if necessary

// Initialize dotenv for environment variables
dotenv.config();

// Initialize express app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB database
connectDB();

// Example of setting up a route
app.get('/', (req, res) => {
    res.send("Hello World!");
});

// Example of more route setup (optional)
import authRoutes from './routes/authRoutes.js';
app.use('/api/auth', authRoutes);  // Sample route for authentication

// Add other routes here as per your app (admin, user, delivery man, etc.)
app.use('/api/admin', adminRoutes);
app.use('/api/user', userRoutes);
app.use('/api/delivery', deliveryRoutes);

// Define the port and listen for incoming requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
