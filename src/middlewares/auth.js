const {admin, db} = require('../config/firebase');

module.exports = (req, res, next) => {
	let idToken;
	if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
		idToken = req.headers.authorization.split('Bearer ')[1];
	} else {
		return res.status(403).json({
			status: 'error',
			message: 'Unauthorized request! Please try again',
			data: '',
		});
	}
	admin
		.auth()
		.verifyIdToken(idToken)
		.then(async (decodedToken) => {
			req.user = decodedToken;
			try {
				const data = await db.collection('users').where('userId', '==', req.user.uid).limit(1).get();
				req.user.username = data.docs[0].data().username;
				req.user.imageUrl = data.docs[0].data().imageUrl;
				req.user.email = data.docs[0].data().email;
				req.user.name = data.docs[0].data().name;
				return next();
			} catch (err) {
				console.log(err);
				return res.status(403).json({status: 'error', message: 'Error verifying token! Please try again', data: ''});
			}
		});
};
