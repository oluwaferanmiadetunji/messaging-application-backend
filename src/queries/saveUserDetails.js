const {db} = require('../config/firebase');

module.exports = async (data) => {
	const save = await db.doc(`/users/${data.username}`).set(data);
};
