const {db} = require('../config/firebase');

module.exports = async (first, second) => {
	let chats = [];
	const response = await db.collection('chats').doc(first).collection(second).get();
	response.forEach((doc) => {
		chats.push(doc.data());
	});
	return chats;
};
