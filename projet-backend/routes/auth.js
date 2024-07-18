const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Register user
router.post("/register", authController.register);

module.exports = router;
