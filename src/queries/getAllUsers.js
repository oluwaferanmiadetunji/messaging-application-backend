const {db} = require('../config/firebase');

module.exports = async () => {
	let users = [];
	const response = await db.collection('users').get();
	response.forEach((doc) => {
		users.push(doc.data());
	});
	return users;
};
