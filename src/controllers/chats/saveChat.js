const saveChat = require('../../queries/saveChat');
const splitRoom = require('../../helpers/splitRoom');

module.exports = async (chat, data) => {
	// split data to know which room to save to
	const {first, second} = splitRoom(chat);

	// save chat
	await saveChat(first, second, data);
};
