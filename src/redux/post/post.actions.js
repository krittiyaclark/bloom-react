import * as PostActionTypes from './post.actions.types';
import { firestore } from '../../firebase/firebase.utils';

export const createPost = (post) => {
	const createdAt = new Date();

	//  make async call to database
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		dispatch({ type: PostActionTypes.CREATE_POST_START });
		firestore
			.collection('posts')
			.add({
				...post,
				authorFirstName: 'Calvin',
				authorLastName: 'Clark',
				authorId: 12345,
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
