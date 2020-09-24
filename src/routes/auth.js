const express = require('express');
const router = express.Router();
const login = require('../controllers/auth/login');
const register = require('../controllers/auth/register');
const resetPassword = require('../controllers/auth/resetPassword');

router.post('/user/register', register);
router.post('/user/login', login);
router.post('/user/reset-password', resetPassword);

module.exports = router;
