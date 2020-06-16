import { combineReducers } from 'redux';

import authReducer from './auth/auth.reducer';
import postReducer from './post/post.reducer';

import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
	auth: authReducer,
	post: postReducer,
	firestore: firestoreReducer,
	firebase: firebaseReducer,
});

export default rootReducer;
