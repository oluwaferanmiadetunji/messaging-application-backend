const {isEmail, isEmpty, isGreater} = require('./functions');

const validateRegisterData = (data) => {
	let errors = {};

	if (isEmpty(data.name)) errors.name = 'Name must not be empty';
	if (isEmpty(data.username)) errors.username = 'Username must not be empty';
	if (isEmpty(data.email)) {
		errors.email = 'Email must not be empty';
	} else if (!isEmail(data.email)) {
		errors.email = 'Invalid email address';
	}
	if (isEmpty(data.password)) errors.password = 'Password must not be empty';
	if (isGreater(data.password, 6)) errors.password = 'Password must have at least 6 characters';

	return {
		errors,
		valid: Object.keys(errors).length === 0 ? true : false,
	};
};
const {} = require('./functions');

const validateLoginData = (data) => {
	let errors = {};

	if (isEmpty(data.email)) {
		errors.email = 'Email must not be empty';
	}
	if (isEmpty(data.password)) errors.password = 'Password must not be empty';

	return {
		errors,
		valid: Object.keys(errors).length === 0 ? true : false,
	};
};

const reduceUserDetails = (data) => {
	let userDetails = {};
	if (!isEmpty(data.bio.trim())) userDetails.bio = data.bio;
	if (!isEmpty(data.website.trim())) {
		if (data.website.trim().substring(0, 4) !== 'http') {
			userDetails.website = `http://${data.website.trim()}`;
		} else userDetails.website = data.website;
	}
	if (!isEmpty(data.location.trim())) userDetails.location = data.location;
	return userDetails;
};

module.exports = {validateRegisterData, validateLoginData, reduceUserDetails};
