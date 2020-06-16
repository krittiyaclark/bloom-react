import * as PostActionTypes from './post.actions.types';

const INITIAL_STATE = {
	postsLists: [
		{ id: '1', title: 'help me with project', content: 'some content' },
		{ id: '2', title: 'buy some bananas', content: 'some content' },
		{ id: '3', title: 'learn React', content: 'some content' },
	],
	errorMessage: false,
};

const postReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case PostActionTypes.CREATE_POST_START:
			console.log('Create post start');
			return state;
		case PostActionTypes.CREATE_POST:
			console.log('Create post', action.post);
			return state;
		case PostActionTypes.CREATE_POST_ERROR:
			console.log('Create post error', action.error);
			return state;
		default:
			return state;
	}
};

export default postReducer;
