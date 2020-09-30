const getAllUsers = require('../../queries/getAllUsers');
const {filterByUserName} = require('../../helpers/filters');

module.exports = async (username) => {
	const data = await getAllUsers();
	const users = await filterByUserName(data, username);
	return users;
};
