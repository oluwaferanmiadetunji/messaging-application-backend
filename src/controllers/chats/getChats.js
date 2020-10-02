const getChats = require('../../queries/getChats');
const createChat = require('../../queries/createChat');
const splitRoom = require('../../helpers/splitRoom');

module.exports = async (chat) => {
	const {first, second} = splitRoom(chat);

	let chats;

	// check if chat room exists

	const data = await getChats(first, second);
	if (data === undefined || data.length == 0) {

		// create chat room if chat room doesn't exists
		await createChat(first, second);
		// return an empty array 
		chats = [];
	} else {
		chats = data;
	}

	// return chats
	return chats;
};
