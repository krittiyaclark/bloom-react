// export const setCurrentUser = (user) => ({
// 	type: 'SET_CURRENT_USER',
// 	payload: user,
// });

export const signIn = (credentials) => {
	return (dispatch, getState, { getFirebase }) => {
		// initial firebase
		const firebase = getFirebase();

		firebase
			.auth()
			.signInWithEmailAndPassword(credentials.email, credentials.password)
			.then(() => {
				dispatch({ type: 'LOGIN_SUCCESS' });
			})
			.catch((err) => {
				dispatch({ type: 'LOGIN_ERROR', err });
			});
	};
};

export const signOut = () => {
	return (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase();

		firebase
			.auth()
			.signOut()
			.then(() => {
				dispatch({ type: 'SIGNOUT_SUCCESS' });
			});
	};
};
