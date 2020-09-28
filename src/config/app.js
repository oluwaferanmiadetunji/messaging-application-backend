const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

const authRoutes = require('../routes/auth');
const home = require('../routes/home');
const user = require('../routes/user');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(helmet());
app.use(cookieParser());

let morganFunction = function (tokens, req, res) {
	return [
		tokens.method(req, res),
		tokens.url(req, res),
		tokens.status(req, res),
		tokens.res(req, res, 'content-length'),
		'-',
		tokens['response-time'](req, res),
		'ms',
	].join(' ');
};
app.use(morgan(morganFunction));

app.use('/', authRoutes);
app.use('/', home);
app.use('/', user);

module.exports = app;
