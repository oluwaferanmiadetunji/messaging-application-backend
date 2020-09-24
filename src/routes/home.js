const express = require('express');
const router = express.Router();

function homeController(req, res) {
	res.status(200).json({status: 'ok', message: '', data: 'https://youtu.be/cUhwEsOw1YU'});
}

router.get('/', homeController);

module.exports = router;
