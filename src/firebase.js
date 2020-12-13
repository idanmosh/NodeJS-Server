const admin = require('firebase-admin');
const serviceAccount = require('../pooloff-6fb33-firebase-adminsdk-r0y07-b303775a9d.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://pooloff-6fb33.firebaseio.com"
});

module.exports = admin;