const express = require('express');
const router = express.Router();
const tripsController = require('../controllers/trips'); // Import trips controller

// Define the GET route for retrieving trips
router.get('/trips', tripsController.tripsList);

module.exports = router;
