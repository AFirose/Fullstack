const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');  // Add auth

const {
  getAllUsersHandler,
  getUserByIdHandler,
  createUserHandler,
  updateUserHandler,
  deleteUserHandler
} = require('../controllers/userControllers');

// Public routes
router.get('/', getAllUsersHandler);
router.get('/:userId', getUserByIdHandler);

// Protected routes
router.post('/', auth, createUserHandler);
router.put('/:userId', auth, updateUserHandler);
router.delete('/:userId', auth, deleteUserHandler);

module.exports = router;
