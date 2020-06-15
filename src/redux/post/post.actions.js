import * as PostActionTypes from './post.actions.types';
import { firestore } from '../../firebase/firebase.utils';

export const createPost = (post) => {
	const createdAt = new Date();

	//  make async call to database
	return (dispatch, getState, { getFirebase, getFirestore }) => {
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

export const fetchPostSuccess = (postsLists) => ({
	type: PostActionTypes.FETCH_POST_SUCCESS,
	postsLists: postsLists,
});

export const fetchPostFailure = (errorMessage) => ({
	type: PostActionTypes.FETCH_POST_FAILURE,
	errorMessage: errorMessage,
});

export const fetchPost = (dispatch) => {
	return async (dispatch) => {
		try {
			dispatch({ type: PostActionTypes.FETCH_POST_START });
			const response = await firestore
				.collection('posts')
				.get()
				.then((querySnapshot) => {
					const postsLists = [];
					querySnapshot.forEach((doc, index) => {
						console.log(`${doc.id} => ${doc.data()}`);
						// postsLists.push(doc.data());
						postsLists.push(doc.data());
					});
					// const data = querySnapshot.docs.map((doc, index) =>
					// 	postsLists.push(doc.data())
					// );
					// console.log(data); // array of cities objects
					console.log(postsLists);
					dispatch({
						type: PostActionTypes.FETCH_POST_SUCCESS,
						payload: postsLists,
					});
					return postsLists;
				});
		} catch (error) {
			console.log(error);
			dispatch({
				type: PostActionTypes.FETCH_POST_FAILURE,
				payload: error.errorMessage,
			});
		}
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
