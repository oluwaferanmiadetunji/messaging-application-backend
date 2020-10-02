const saveRecent = require('../../queries/saveRecent');

module.exports = async (user, sender, data) => {
	await saveRecent(user, sender, data);
};
