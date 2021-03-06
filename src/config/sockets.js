const socketio = require('socket.io');
const setOnlineStatus = require('../controllers/user/setOnlineStatus');
const getChats = require('../controllers/chats/getChats');
const saveChat = require('../controllers/chats/saveChat');
const getAllUsers = require('../controllers/user/getAllUsers');
const getProfile = require('../controllers/user/profile');

module.exports.listen = (app) => {
	const io = socketio(app);

	// connect to client
	io.on('connection', (socket) => {
		// set user online status to true
		socket.on('online', async ({username}) => {
			await setOnlineStatus(username, true);
			const users = await getAllUsers(username);
			const data = await getProfile(username);

			// update all users
			io.emit('allUsers', users);
			socket.emit('profile', data);
		});

		// set user online status to false
		socket.on('offline', async ({username}) => {
			await setOnlineStatus(username, false);
			const users = await getAllUsers(username);

			// update all users
			io.emit('allUsers', users);
		});

		// get chats with recipeint
		socket.on('getChats', async (chat, callback) => {
			const chats = await getChats(chat);
			
			// join chat
			socket.join(chat);
			callback({chats});
		});

		// send message to recipient
		socket.on('sendMessage', async ({data, chat}) => {
			io.to(chat).emit('message', {sender: data.username, message: data.message, createdAt: data.createdAt});
			await saveChat(chat, {sender: data.username, message: data.message, createdAt: data.createdAt});
		});

		// disconnect socket
		socket.on('disconnect', () => {
			console.log('User left!!!');
		});
	});

	return io;
};
