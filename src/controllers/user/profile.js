const getUserData = require('../../queries/getUserData');

module.exports = async (username) => {
	const user = await getUserData('username', username);
	return user;
};
