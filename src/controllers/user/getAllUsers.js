const getAllUsers = require('../../queries/getAllUsers');
const {filterByUserName} = require('../../helpers/filters');

module.exports = async (req, res) => {
	const username = req.user.username;

	const data = await getAllUsers();
	const users = await filterByUserName(data, username);

	return res.status(200).json({status: 'ok', message: 'Got all users', data: users});
};
