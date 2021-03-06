require('dotenv').config();

module.exports = {
	port: process.env.PORT,
	dbUrl: process.env.MONGO_DB_URI,
	dbPassword: process.env.MONGO_ATLAS_PW,
	secret: process.env.SECRET,
	apiKey: process.env.API_KEY,
	authDomain: process.env.AUTH_DOMAIN,
	databaseURL: process.env.DATABASE_URL,
	projectId: process.env.PROJECT_ID,
	storageBucket: process.env.STORAGE_BUCKET,
	messagingSenderId: process.env.MESSAGING_SENDER_ID,
	appId: process.env.APP_ID,
	measurementId: process.env.MEASUREMENT_ID,
	noImg: 'user.jpg',
};
