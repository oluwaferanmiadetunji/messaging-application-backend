const express = require('express');
const router = express.Router();

function homeController(req, res) {
	res.status(200).json({status: 'ok', message: 'Welcome!', data: ''});
}

router.get('/', homeController);

module.exports = router;
