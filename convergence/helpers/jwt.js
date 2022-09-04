const jwt = require("jsonwebtoken");

// Auth middleware 
module.exports = (req, res, next) => {
  try {
    // Get token from header
    const token = req.headers.authorization;

    // verify token with secret key 
    const decodedToken = jwt.verify(token, process.env.secret);
    req.userData = { email: decodedToken.email };
    next();
  } catch (error) {
    res.status(401).json({ message: "Auth failed!" });
  }
};