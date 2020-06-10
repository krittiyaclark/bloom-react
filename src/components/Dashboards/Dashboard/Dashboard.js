import React, { Component } from 'react';
import { connect } from 'react-redux';

import Notification from '../Notification/Notifications';
import PostList from '../../Posts/PostList';

import './Dashboard.css';

class Dashboard extends Component {
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

export default connect(mapStateToProps)(Dashboard);
