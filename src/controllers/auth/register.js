const {firebaseConfig} = require('../../config/firebase');
const {validateRegisterData} = require('../../helpers/validators');
const getUserData = require('../../queries/getUserData');
const createUser = require('../../queries/createUser');
const saveUserDetails = require('../../queries/saveUserDetails');

const {noImg} = require('../../config/config');

module.exports = async (req, res) => {
	const user = {
		name: req.body.name,
		username: req.body.username,
		email: req.body.email,
		password: req.body.password,
	};
	// validate register data
	const {valid, errors} = await validateRegisterData(user);
	if (!valid) return res.status(400).json({status: 'error', message: 'Account could not be created!', data: errors});

	const exists = await getUserData('username', user.username);

	if (!!exists) return res.status(400).json({status: 'error', message: 'This username has been taken already!', data: ''});

	const {userId, error, message} = await createUser(user.email, user.password);

	if (error) return res.status(400).json({status: 'error', message, data: ''});

	// save user details
	await saveUserDetails({
		username: user.username,
		name: user.name,
		email: user.email,
		createdAt: new Date().toISOString(),
		userId,
		imageUrl: `https://firebasestorage.googleapis.com/v0/b/${firebaseConfig.storageBucket}/o/${noImg}?alt=media`,
		online: false,
	});

	return res.status(201).json({status: 'ok', message: 'Account created successfull', data: ''});
};
