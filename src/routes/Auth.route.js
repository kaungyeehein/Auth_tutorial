const express = require('express');
const router = express.Router();

// Register
router.post('/register', async (req, res, next) => {
    res.send("register router");
});

// Login
router.post('/login', async (req, res, next) => {
    res.send("login router");
});

// Refresh token
router.post('/refresh-token', async (req, res, next) => {
    res.send("refresh token router");
});

// Logout
router.delete('/logout', async (req, res, next) => {
    res.send("logout router");
});

module.exports = router;