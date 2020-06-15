import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import postReducer from './post/post.reducer';

import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
	user: userReducer,
	post: postReducer,
	firestore: firestoreReducer,
	firebase: firebaseReducer,
});

export default rootReducer;
