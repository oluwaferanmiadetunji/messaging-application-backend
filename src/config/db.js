const mongoose = require('mongoose');
const {dbUrl} = require('./config');

mongoose.connect(dbUrl, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
});

module.exports = mongoose.connection;