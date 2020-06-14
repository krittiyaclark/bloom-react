import * as PostActionTypes from './post.actions.types';
import { firestore } from '../../firebase/firebase.utils';

export const createPost = (post) => async (dispatch) => {
	return (dispatch, getState) => {
		const createdAt = new Date();

		//  make async call to database
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

export const fetchPostStart = () => ({
	type: PostActionTypes.FETCH_POST_START,
});

export const fetchPostSuccess = (collectionsMap) => ({
	type: PostActionTypes.FETCH_POST_SUCCESS,
	payload: collectionsMap,
});

export const fetchPostFailure = (errorMessage) => ({
	type: PostActionTypes.FETCH_POST_FAILURE,
	payload: errorMessage,
});

export const fetchPost = () => async () => {
	return (dispatch, getState) => {
		const postRef = firestore.collection('posts');
		dispatch(fetchPostStart());

		postRef.onSnapshot(async (onSnapshot) => {
			console.log(onSnapshot);
		});

		postRef
			.get()
			.then((querySnapshot) => {
				const data = querySnapshot.docs.map((doc) => doc.data());
				console.log(data); // array of cities objects
				dispatch(fetchPostSuccess(data));
			})
			.catch((error) => dispatch(fetchPostFailure(error.errorMessage)));
	};

	// return (dispatch) => {
	// 	firestore
	// 		.collection('posts')
	// 		.get()
	// 		.then((querySnapshot) => {
	// 			const data = querySnapshot.docs.map((doc) => doc.data());
	// 			console.log(data); // array of cities objects
	// 		})
	// 		.catch((error) =>
	// 			dispatch({ type: PostActionTypes.CREATE_POST_ERROR, error })
	// 		);
	// };
};
