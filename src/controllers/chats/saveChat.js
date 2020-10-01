const saveChat = require('../../queries/saveChat');
const splitRoom = require('../../helpers/splitRoom');

module.exports = async (chat, data) => {
	const {first, second} = splitRoom(chat);
	await saveChat(first, second, data);
};
