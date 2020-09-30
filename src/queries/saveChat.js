const {db} = require('../config/firebase');

module.exports = async (chat, data) => {
	try {
		await db.doc(`/chats/${chat}`).set(data);
	} catch (err) {
		console.log(err);
	}
};
