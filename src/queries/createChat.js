const {db} = require('../config/firebase');

module.exports = async (chat) => {
	try {
		await db.doc(`/chats/${chat}`).set({a: 'hi'});
	} catch (err) {
		console.log(err);
	}
};
