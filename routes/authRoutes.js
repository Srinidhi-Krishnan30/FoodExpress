import express from 'express';
import {registerUser, loginUser } from '../controllers/authController.js';

const router = express.Router();

// Route to handle login
router.post('/login', loginUser);

export default router;
