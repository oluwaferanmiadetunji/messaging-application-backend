const setOnlineStatus = require('../../queries/setOnlineStatus');

module.exports = async (username, value) => {
	await setOnlineStatus(username, value);
};
