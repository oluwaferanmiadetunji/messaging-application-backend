const express = require('express');
const router = express.Router();
const profile = require('../controllers/user/profile');

router.post('/user/profile', profile);

module.exports = router;
