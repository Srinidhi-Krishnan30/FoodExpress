// src/server.js

import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/dbConnect.js';  // Adjust the path if necessary
import authRoutes from './routes/authRoutes.js';
import adminRoutes from './routes/adminRoutes.js'
import userRoutes from './routes/userRoutes.js'
import deliveryRoutes from './routes/deliveryRoutes.js'

dotenv.config();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB database
connectDB.connectDB();


app.use('/api/auth', authRoutes);  // Sample route for authentication
app.use('/api/admin', adminRoutes);
app.use('/api/user', userRoutes);
app.use('/api/delivery', deliveryRoutes);

// Define the port and listen for incoming requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
