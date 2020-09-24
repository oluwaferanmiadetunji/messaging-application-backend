const admin = require('firebase-admin');
const firebase = require('firebase');
const SA = require('./ServiceAccount.json');
const {apiKey, appId, authDomain, databaseURL, measurementId, messagingSenderId, storageBucket, projectId} = require('./config');

const firebaseConfig = {
	apiKey,
	authDomain,
	databaseURL,
	projectId,
	storageBucket,
	messagingSenderId,
	appId,
	measurementId,
};

admin.initializeApp({
	credential: admin.credential.cert(SA),
	storageBucket: firebaseConfig.storageBucket,
	databaseURL: firebaseConfig.databaseURL,
});

firebase.initializeApp(firebaseConfig);

const storage = admin.storage().bucket();

const db = admin.firestore();

module.exports = {admin, firebase, storage, db, firebaseConfig};
