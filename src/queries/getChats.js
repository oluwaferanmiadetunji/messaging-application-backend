const {db} = require('../config/firebase');

module.exports = async (first, second) => {
	let chats = [];
	try {
		const response = await db.collection('chats').doc(first).collection(second).orderBy('createdAt', 'desc').get();
		response.forEach((doc) => {
			chats.push(doc.data());
		});
	} catch (err) {
		console.log(err);
	}
	return chats;
};
