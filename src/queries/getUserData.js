const {db} = require('../config/firebase');

module.exports = async (field, params) => {
	switch (field) {
		case 'email':
			const emailResponse = await db.collection('users').where('email', '==', params).limit(1).get();
			if (emailResponse.docs[0]) {
				return emailResponse.docs[0].data();
			} else {
				return null;
			}
		case 'username':
			const usernameResponse = await db.collection('users').where('username', '==', params).limit(1).get();
			if (usernameResponse.docs[0]) {
				return usernameResponse.docs[0].data();
			} else {
				return null;
			}
		case 'userId':
			const userIdResponse = await db.collection('users').where('userId', '==', params).limit(1).get();
			if (userIdResponse.docs[0]) {
				return userIdResponse.docs[0].data();
			} else {
				return null;
			}
		default:
			return null;
	}
};
