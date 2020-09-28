const {validateLoginData} = require('../../helpers/validators');
const getUserData = require('../../queries/getUserData');
const getUserToken = require('../../queries/getUserToken');

module.exports = async (req, res) => {
	const user = {
		email: req.body.email,
		password: req.body.password,
	};

	// validate login data
	const {valid, errors} = await validateLoginData(user);

	// if data is invalid, send appropriate response
	if (!valid) return res.status(400).json(errors);

	try {
		// get user token
		const {token, error, message} = await getUserToken(user.email, user.password);

		// if token error, return error
		if (error) {
			return res.status(400).json({status: 'error', message, data: ''});
		}

		// get user data
		const userData = await getUserData('email', user.email);

		return res.status(200).json({status: 'ok', message: 'User logged in successfully', data: {token, userData}});
	} catch (err) {
		console.log(err);
		return res.status(500).json({status: 'error', message: 'Something went wrong! Please try again', data: ''});
	}
};
