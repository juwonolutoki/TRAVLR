const express = require('express');
const router = express.Router();

// Import the controller for the views
const mainController = require('../controllers/main');

// Define routes and link to the corresponding controller methods
router.get('/', mainController.getHome);   // Route for home page
router.get('/about', mainController.getAbout);  // Route for about page
router.get('/contact', mainController.getContact);  // Route for contact page

module.exports = router;
