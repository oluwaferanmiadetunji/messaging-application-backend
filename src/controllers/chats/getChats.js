const getChats = require('../../queries/getChats');
const createChat = require('../../queries/createChat');

module.exports = async (chat) => {
	let chats;
	// check if chat room exists
	const exists = await getChats(chat);

	if (exists) {
		chats = exists;
	} else {
		// create chat room if chat room doesn't exists
		await createChat(chat);

		chats = [];
	}

	// return chats
	return chats;
};
