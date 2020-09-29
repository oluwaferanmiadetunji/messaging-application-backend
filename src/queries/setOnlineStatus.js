const {db} = require('../config/firebase');

module.exports = async (username, value) => {
	await db.doc(`/users/${username}`).update({
		online: value,
	});
};
