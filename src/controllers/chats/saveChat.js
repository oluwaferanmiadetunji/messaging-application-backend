const saveChat = require('../../queries/saveChat');

module.exports = async (chat, data) => {
	await saveChat(chat, data);
};
