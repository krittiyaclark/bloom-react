import React from 'react';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import Card from '../UI/Card/Card';

const PostDetail = (props) => {
	console.log(props);
	const { post, auth } = props;

	if (!auth.uid) return <Redirect to='/signinsignup' />;
	if (post) {
		return (
			<Card>
				<span>{post.title}</span>
				<p>{post.content}</p>
				<div>
					<p>
						Posted by {post.authorFirstName} {post.authorLastName}
					</p>
				</div>
				<div>
					<p>9 November, 9pm</p>
				</div>
			</Card>
		);
	} else {
		return (
			<div className='container center'>
				<p>Loading project...</p>
			</div>
		);
	}
};

const mapStateToProps = (state, ownProps) => {
	console.log(state);
	const id = ownProps.match.params.id;
	const posts = state.firestore.data.posts;
	const post = posts ? posts[id] : null;
	return {
		post: post,
		auth: state.firebase.auth,
	};
};

export default compose(
	connect(mapStateToProps),
	firestoreConnect([{ collection: 'posts' }])
)(PostDetail);
