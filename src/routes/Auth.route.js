const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/Auth.controller');

// Register
router.post('/register', AuthController.register);

// Login
router.post('/login', AuthController.login);

// Refresh token
router.post('/refresh-token', AuthController.refreshToken);

// Logout
router.delete('/logout', AuthController.logout);

module.exports = router;