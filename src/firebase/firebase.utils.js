import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
	apiKey: 'AIzaSyCD6sj6p95aCf3t50bp4JNVA_3u8ETVecI',
	authDomain: 'bloom-react.firebaseapp.com',
	databaseURL: 'https://bloom-react.firebaseio.com',
	projectId: 'bloom-react',
	storageBucket: 'bloom-react.appspot.com',
	messagingSenderId: '159379057289',
	appId: '1:159379057289:web:2e3d7c5e4cf5b2eea2f458',
	measurementId: 'G-NGQWWMT5SV',
};

// Auth
export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) {
		return;
	}

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google signIn
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// Post
// export const addPostAndDocuments = async (collectionKey, objectsToAdd) => {
// 	const collectionRef = firestore.collection(collectionKey);

// 	const batch = firestore.batch();
// 	objectsToAdd.forEach((obj) => {
// 		const newDocRef = collectionRef.doc();
// 		batch.set(newDocRef, obj);
// 	});

// 	return await batch.commit();
// };

export default firebase;
