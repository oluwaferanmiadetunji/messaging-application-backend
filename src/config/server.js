const http = require('http');
const {port} = require('./config');
const app = require('./app');

const server = http.createServer(app);

server.listen(port, () => console.log('Server running at port: ', port));
