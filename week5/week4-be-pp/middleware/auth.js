// middleware/auth.js

// This middleware checks if the user is an admin
function auth(req, res, next) {
  const isAdmin = req.query.admin === 'true'; // Check query parameter
  
  if (isAdmin) {
    next(); // Let them pass
  } else {
    res.status(403).json({
      message: "Access denied. You need admin privileges."
    });
  }
}

module.exports = auth;
