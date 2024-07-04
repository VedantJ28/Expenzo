const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Register route
router.post("/register", authController.register);

// Login route
router.post("/login", authController.login);

// Protected route example
router.get("/protected", authController.verifyToken, (req, res) => {
  res.json({ msg: "This is a protected route", user: req.user });
});

module.exports = router;