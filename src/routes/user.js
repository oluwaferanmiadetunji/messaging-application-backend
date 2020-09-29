const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const profile = require('../controllers/user/profile');
const getAllUsers = require('../controllers/user/getAllUsers');

router.get('/users/all', auth, getAllUsers);
router.get('/user/profile', auth, profile);

module.exports = router;
