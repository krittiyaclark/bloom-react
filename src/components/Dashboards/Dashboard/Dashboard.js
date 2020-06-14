import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPost } from '../../../redux/post/post.actions';
import Notification from '../Notification/Notifications';
import PostList from '../../Posts/PostList';

import { firestore } from '../../../firebase/firebase.utils';

import './Dashboard.css';

class Dashboard extends Component {
	// unsubscribeFromSnapshot = null;

	// componentDidMount() {
	// 	const postRef = firestore.collection('posts');

	// 	postRef.onSnapshot(async (onSnapshot) => {
	// 		console.log(onSnapshot);
	// 	});
	// }

	render() {
		console.log(this.props);
		const { posts } = this.props;
		return (
			<div className='DashboardContainer'>
				<section>
					<h3 className='section-title'>Today</h3>
					<PostList postsLists={posts} />
				</section>

				<aside>
					<h3 className='section-title'>Notifications</h3>
					<Notification />
				</aside>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log(state);
	return {
		posts: state.post.postsLists,
	};
};

const mapDispatchToProps = (dispatch) => {
	console.log(dispatch);

	return {
		fetchPost: (post) => {
			dispatch(fetchPost(post));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
