const {db} = require('../config/firebase');

module.exports = async (user, sender, data) => {
	try {
		await db.collection('users').doc(user).collection(sender).set(data);
	} catch (err) {
		console.log(err);
	}
};
