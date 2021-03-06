const http = require('http');
const {port} = require('./config');
const app = require('./app');

const server = http.createServer(app);

require('./sockets').listen(server);

server.listen(port, () => console.log('Server running at port: ', port));
