const socketio = require('socket.io');
const setOnlineStatus = require('../controllers/user/setOnlineStatus');
const getChats = require('../controllers/chats/getChats');
const saveChat = require('../controllers/chats/saveChat');
const getAllUsers = require('../controllers/user/getAllUsers');
const getProfile = require('../controllers/user/profile');

module.exports.listen = (app) => {
	const io = socketio(app);

	io.on('connection', (socket) => {
		// set user online status to true
		socket.on('online', async ({username}) => {
			await setOnlineStatus(username, true);
			const users = await getAllUsers(username);
			const data = await getProfile(username);
			socket.emit('allUsers', users);
			setInterval(() => {
				socket.emit('allUsers', users);
			}, 10000);
			socket.emit('profile', data);
		});

		// set user online status to false
		socket.on('offline', async ({username}) => {
			await setOnlineStatus(username, false);
		});

		// get chats with recipeint
		socket.on('getChats', async ({chat}, callback) => {
			await getChats(chat);

			// join chat
			socket.join(chat);

			callback();
		});

		// send message to recipient
		socket.on('sendMessage', async ({data, chat}, callback) => {
			io.to(chat).emit('message', {sender: data.username, text: data.message, createdAt: data.createdAt});
			await saveChat(chat, data);
			callback();
		});

		// disconnect socket
		socket.on('disconnect', () => {
			console.log('User left!!!');
		});
	});

	return io;
};
