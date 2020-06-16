import * as PostActionTypes from './post.actions.types';

export const createPost = (post) => {
	const createdAt = new Date();

	//  make async call to database
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		dispatch({ type: PostActionTypes.CREATE_POST_START });

		// Retrive firestore
		const firestore = getFirestore();
		// Retrive user information
		const profile = getState().firebase.profile;
		const authorId = getState().firebase.auth.uid;

		firestore
			.collection('posts')
			.add({
				...post,
				authorFirstName: profile.firstName,
				authorLastName: profile.lastName,
				authorId: authorId,
				createdAt,
			})
			.then(() => {
				dispatch({ type: PostActionTypes.CREATE_POST, post });
			})
			.catch((error) => {
				dispatch({ type: PostActionTypes.CREATE_POST_ERROR, error });
			});
	};
};
