const http = require('http');
const {port} = require('./config');
const app = require('./app');
const connection = require('./db');

const server = http.createServer(app);

require('./sockets').listen(server);

connection.on('open', () => {
	console.log('Connection to MongoDB Atlas established successfully');
});

server.listen(port, () => console.log('Server running at port: ', port));
