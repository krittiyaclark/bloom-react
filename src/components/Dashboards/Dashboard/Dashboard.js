import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

import { fetchPost } from '../../../redux/post/post.actions';
import Notification from '../Notification/Notifications';
import PostList from '../../Posts/PostList';

import './Dashboard.css';

class Dashboard extends Component {
	// componentDidMount() {
	// 	const { fetchPost } = this.props;
	// 	fetchPost();
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
		posts: state.firestore.ordered.posts,
	};
};

const mapDispatchToProps = (dispatch) => {
	console.log(dispatch);

	return {
		fetchPost: (posts) => {
			dispatch(fetchPost(posts));
		},
	};
};

// export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
export default compose(
	firestoreConnect([{ collection: 'posts' }]),
	connect(mapStateToProps)
)(Dashboard);
