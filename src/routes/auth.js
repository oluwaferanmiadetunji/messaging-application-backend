const express = require('express');
const router = express.Router();
const login = require('../controllers/auth/login');
const register = require('../controllers/auth/register');

router.post('/user/register', register);
router.post('/user/login', login);

module.exports = router;
