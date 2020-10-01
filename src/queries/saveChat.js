const {db} = require('../config/firebase');

module.exports = async (first, second, data) => {
	try {
		const chat = db.collection('chats');
		await chat.doc(first).collection(second).doc().set(data);
	} catch (err) {
		console.log(err);
	}
};
