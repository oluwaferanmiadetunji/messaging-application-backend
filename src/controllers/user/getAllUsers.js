const getAllUsers = require('../../queries/getAllUsers');

module.exports = async () => {
	const data = await getAllUsers();
	return data;
};
