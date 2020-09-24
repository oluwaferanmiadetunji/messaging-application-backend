const {firebase} = require('../../config/firebase');
const {validateLoginData} = require('../../helpers/validators');

module.exports = (req, res) => {
	const user = {
		email: req.body.email,
		password: req.body.password,
	};

	const {valid, errors} = validateLoginData(user);
	if (!valid) return res.status(400).json(errors);

	firebase
		.auth()
		.signInWithEmailAndPassword(user.email, user.password)
		.then((data) => {
			return data.user.getIdToken();
		})
		.then((token) => {
			return res.json({status: 'ok', message: 'User logged in successfully', data: token});
		})
		.catch((err) => {
			if (err.code === 'auth/wrong-password' || err.code === 'auth/user-not-found') {
				return res.status(400).json({status: 'error', message: 'Wrong credentials!', data: ''});
			} else {
				return res.status(500).json({status: 'error', message: 'Something went wrong! Please try again', data: ''});
			}
		});
};
