const {db} = require('../config/firebase');

module.exports = async () => {
	let users = [];
	try {
		const response = await db.collection('users').get();
		response.forEach((doc) => {
			users.push(doc.data());
		});
		return users;
	} catch (err) {
		console.log(err)
		return [];
	}
};
