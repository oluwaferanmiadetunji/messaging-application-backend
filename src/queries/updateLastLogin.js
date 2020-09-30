const {db} = require('../config/firebase');

module.exports = async (username) => {
	await db.doc(`/users/${username}`).update({
		lastLogin: new Date().toISOString(),
	});
};
