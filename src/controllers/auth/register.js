const {firebase, db, firebaseConfig} = require('../../config/firebase');
const {validateRegisterData} = require('../../helpers/validators');

module.exports = (req, res) => {
	const user = {
		name: req.body.name,
		username: req.body.username,
		email: req.body.email,
		password: req.body.password,
	};

	const noImg = 'user.jpg';

	const {valid, errors} = validateRegisterData(user);
	if (!valid) return res.status(400).json({status: 'error', message: 'Account could not be created!', data: errors});

	db.doc(`/users/${user.username}`)
		.get()
		.then((doc) => {
			if (doc.exists) {
				return res.status(400).json({status: 'error', message: 'This username has been taken already!', data: ''});
			} else {
				return firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
			}
		})
		.then((data) => {
			return db.doc(`/users/${user.username}`).set({
				username: user.username,
				name: user.name,
				email: user.email,
				createdAt: new Date().toISOString(),
				userId: data.user.uid,
				imageUrl: `https://firebasestorage.googleapis.com/v0/b/${firebaseConfig.storageBucket}/o/${noImg}?alt=media`,
			});
		})
		.then(() => {
			return res.status(201).json({status: 'ok', message: 'Account created successfully!', data: ''});
		})
		.catch((err) => {
			if (err.code === 'auth/email-already-in-use') {
				return res.status(400).json({status: 'error', message: 'This email has been taken already!', data: ''});
			} else {
				return res.status(500).json({status: 'error', message: 'Something went wrong! Please try again', data: ''});
			}
		});
};
