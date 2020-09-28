const {firebase} = require('../config/firebase');

module.exports = async (email, password) => {
	try {
		const data = await firebase.auth().createUserWithEmailAndPassword(email, password);
		const userId = data.user.uid
		return {
			userId,
			error: false,
		};
	} catch (err) {
    console.log(err)
		if (err.code === 'auth/email-already-in-use') {
			return {
				userId: '',
				error: true,
				message: 'This email has been taken already!',
			};
		} else {
			return {
				userId: '',
				error: true,
				message: err.message,
			};
		}
	}
};
