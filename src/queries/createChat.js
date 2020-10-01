const {db} = require('../config/firebase');

module.exports = async (first, second) => {
	try {
		const chat = db.collection('chats');
		await chat.doc(first).collection(second).doc().set({
			createdAt: new Date().toISOString(),
			sender: 'admin',
			message: 'This is the beginning of your conversation',
		});
	} catch (err) {
		console.log(err);
	}
};
