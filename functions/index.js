const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
// admin.firestore().settings( { timestampsInSnapshots: true })
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
	response.send('Hello from Pai!');
});

// Added a notification in firestore
const createNotification = (notification) => {
	return admin
		.firestore()
		.collection('notifications')
		.add(notification)
		.then((doc) => console.log('notification added', doc));
};

// Created a cloud function for a new post
exports.postCreated = functions.firestore
	.document('posts/{postId}')
	.onCreate((doc) => {
		const post = doc.data();
		const notification = {
			content: 'Added a new post',
			user: `${post.authorFirstName} ${post.authorLastName}`,
			time: admin.firestore.FieldValue.serverTimestamp(),
		};

		return createNotification(notification);
	});

// Created a cloud function for a new user signed up
exports.userJoined = functions.firestore
	.document('users/{userID}')
	.onCreate((snap, context) => {
		const user = snap.data();
		const displayName = `${user.firstName} ${user.lastName}`;

		const notification = {
			content: 'Just joined',
			user: displayName,
			time: new Date(),
		};

		return createNotification(notification);
	});
