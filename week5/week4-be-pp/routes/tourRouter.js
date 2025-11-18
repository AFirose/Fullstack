// routes/tourRouter.js

const express = require('express');
const router = express.Router();

// Import controller functions
const {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour
} = require('../controllers/tourControllers.js');

// Define routes using router.route() chaining
router
  .route('/')
  .get(getAllTours)   // GET /tours
  .post(createTour);  // POST /tours

router
  .route('/:tourId')
  .get(getTourById)      // GET /tours/:tourId
  .put(updateTour)       // PUT /tours/:tourId
  .delete(deleteTour);   // DELETE /tours/:tourId

module.exports = router;
