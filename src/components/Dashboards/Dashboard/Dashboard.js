import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

import Notification from '../Notification/Notifications';
import PostList from '../../Posts/PostList';

import './Dashboard.css';

class Dashboard extends Component {
	render() {
		console.log(this.props);
		const { posts, auth } = this.props;
		if (!auth.uid) return <Redirect to='/signinsignup' />;
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
		auth: state.firebase.auth,
	};
};

export default compose(
	firestoreConnect([{ collection: 'posts' }]),
	connect(mapStateToProps)
)(Dashboard);
