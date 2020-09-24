const {firebase} = require('../../config/firebase');

module.exports = (req, res) => {
	firebase
		.auth()
		.sendPasswordResetEmail(req.body.email)
		.then(() => {
			return res
				.status(200)
				.json({status: 'ok', message: 'A link to reset your password has been sent to your email', data: ''});
		})
		.catch((e) => {
			console.log(e);
			return res.status(500).json({status: 'error', message: 'Could not find email address', data: ''});
		});
};
