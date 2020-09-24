const isEmpty = (string) => {
	if (string.trim() === '') return true;
	else return false;
};

const isEmail = (email) => {
	const regEx = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	if (email.match(regEx)) return true;
	else return false;
};

const isGreater = (string, number) => {
	if (string.length < number) return true;
	else return false;
};

module.exports = {isEmpty, isEmail, isGreater};
