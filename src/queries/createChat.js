const {db} = require('../config/firebase');

module.exports = async (chat) => {
	try {
		await db.doc(`/chats/${chat}`).set({
			createdAt: new Date().toISOString(),
			sender: 'admin',
			message: 'This is the beginning of your conversation',
		});
	} catch (err) {
		console.log(err);
	}
};
