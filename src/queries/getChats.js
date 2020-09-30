const {db} = require('../config/firebase');

module.exports = async (chat) => {
	const doc = await db.doc(`/chats/${chat}`).get();
	if (!doc.exists) {
		return null;
	} else {
		return doc.data();
	}
};
