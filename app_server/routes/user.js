const express = require('express');
const router = express.Router();

// Controller for handling user-related actions
// You can create a 'userController.js' for handling user logic in a separate file
const userController = require('../controllers/user');

// Example route for user registration
router.post('/register', userController.registerUser);  // Handle registration logic
router.post('/login', userController.loginUser);  // Handle login logic

module.exports = router;
