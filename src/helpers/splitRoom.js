module.exports = (chat) => {
	const first = chat.split('-')[0];
	const second = chat.split('-')[1];

	return {first, second};
};
