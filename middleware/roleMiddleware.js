import jwt from 'jsonwebtoken';
import User from '../models/User.js'; // Adjust the path based on your file structure

export const roleMiddleware = (requiredRole) => {
    return async (req, res, next) => {
        try {
            // Extract the token from the Authorization header
            const token = req.headers.authorization?.split(' ')[1];

            if (!token) {
                return res.status(401).json({ message: 'Access denied, no token provided.' });
            }

            // Verify the token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Fetch the user from the database
            const user = await User.findById(decoded.id);

            if (!user) {
                return res.status(404).json({ message: 'User not found.' });
            }

            // Check if the user's role matches the required role
            if (user.role !== requiredRole) {
                return res.status(403).json({ message: 'Access denied, insufficient permissions.' });
            }

            // Attach user to request and proceed
            req.user = user;
            next();
        } catch (error) {
            res.status(500).json({ message: 'Server error', error: error.message });
        }
    };
};
