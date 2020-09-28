const {firebase} = require('../config/firebase');

module.exports = async (email, password) => {
	try {
		const data = await firebase.auth().signInWithEmailAndPassword(email, password);
		const token = await data.user.getIdToken();
		return {
			token,
			error: false,
			message: '',
		};
	} catch (err) {
		if (err.code === 'auth/wrong-password' || err.code === 'auth/user-not-found') {
			return {
				token: '',
				error: true,
				message: 'Wrong credentials!',
			};
		} else {
			return {
				token: '',
				error: true,
				message: err.message,
			};
		}
	}
};
