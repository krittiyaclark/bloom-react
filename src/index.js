import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import firebase from 'firebase/app';

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {
	reduxFirestore,
	getFirestore,
	createFirestoreInstance,
} from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';

import rootReducer from './redux/rootReducer';
import fbConfig from './firebase/firebase.utils';
// import store from './redux/store';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
		reduxFirestore(fbConfig)
	)
);

const rrfConfig = {
	userProfile: 'users',
	useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
};

const rrfProps = {
	firebase,
	config: rrfConfig,
	dispatch: store.dispatch,
	createFirestoreInstance,
};

function AuthIsLoaded({ children }) {
	const auth = useSelector((state) => state.firebase.auth);
	if (!isLoaded(auth)) return <div>splash screen...</div>;
	return children;
}

ReactDOM.render(
	<Provider store={store}>
		<ReactReduxFirebaseProvider {...rrfProps}>
			<BrowserRouter>
				<React.StrictMode>
					<AuthIsLoaded>
						<App />
					</AuthIsLoaded>
				</React.StrictMode>
			</BrowserRouter>
		</ReactReduxFirebaseProvider>
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
