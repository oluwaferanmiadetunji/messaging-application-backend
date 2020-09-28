const getUserData = require('../../queries/getUserData');

module.exports = async (req, res) => {
	const username = req.user.username;
	const user = await getUserData('username', username);
	return res.status(200).json({status: 'ok', message: '', data: user});
};
