const socketio = require('socket.io');
const setOnlineStatus = require('../controllers/user/setOnlineStatus');

module.exports.listen = (app) => {
	const io = socketio(app);

	io.on('connection', (socket) => {
		console.log('New Client connected!!!');

		socket.on('online', ({username}) => {
			setOnlineStatus(username, true);
			socket.broadcast.emit('newUser', {username});
		});

		socket.on('offline', ({username}) => {
			setOnlineStatus(username, false);
		});

		socket.on('disconnect', () => {
			console.log('User left!!!');
		});
	});

	return io;
};