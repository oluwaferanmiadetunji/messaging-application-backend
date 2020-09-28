const express = require('express');
const router = express.Router();
const profile = require('../controllers/user/profile');
const auth = require('../middlewares/auth');

router.get('/user/profile', auth, profile);

module.exports = router;
