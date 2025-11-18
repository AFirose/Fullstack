// week5/week4-be-pp/app.js
const express = require('express');
const morgan = require('morgan'); // Logging middleware

const app = express();

// Import routers
const tourRouter = require('./routes/tourRouter.js');
const userRouter = require('./routes/userRouter.js');

// Middleware
app.use(express.json());       // Parse JSON bodies
app.use(morgan('dev'));        // Log every request in dev-friendly format

// Routes with /api prefix
app.use('/api/tours', tourRouter);
app.use('/api/users', userRouter);

// Root route (optional)
app.get('/', (req, res) => {
  res.send('Welcome to the Week4 BE-PP API!');
});

// 404 handler for unknown routes
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Start the server
const port = 4000;
app.listen(port, () => console.log(`Server running on port ${port}`));
