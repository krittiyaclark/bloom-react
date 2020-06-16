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

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google signIn
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
