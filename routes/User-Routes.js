// User-Routes.js

const express = require("express");
const router = express.Router();
const userController = require("../controllers/User-Controllers.js");
const { verify } = require("../auth.js");

// User Registration
router.post("/register", userController.registerUser);

// User Login
router.post("/login", userController.loginUser);

// Check if email exists
router.post("/check-email", userController.checkEmail);

// Get user details
router.post("/details", verify, userController.getProfile);

// Enroll in a course
router.post("/enroll", verify, userController.enroll);

// Update User Profile
router.put("/update-profile", verify, userController.updateProfile);

// Update Password
router.put("/update-password", verify, userController.changePassword);

module.exports = router;
