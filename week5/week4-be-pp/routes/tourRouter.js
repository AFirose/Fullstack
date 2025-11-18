const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');  // Add auth

const {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour
} = require('../controllers/tourControllers.js');

// Public routes
router.get('/', getAllTours);
router.get('/:tourId', getTourById);

// Protected routes
router.post('/', auth, createTour);
router.put('/:tourId', auth, updateTour);
router.delete('/:tourId', auth, deleteTour);

module.exports = router;
