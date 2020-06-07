import React, { Component } from 'react';

import Notifications from '../Notification/Notifications';
import PostList from '../../components/Posts/PostList';

import './Dashboard.css';

class Dashboard extends Component {
	render() {
		console.log(this.props);
		const { posts } = this.props;
		return (
			<div className='content-wrapper'>
				<div className='container'>
					<section>
						<h3>Today</h3>
						<PostList postLists={posts} />
					</section>

					<aside>
						<h3>Notifications</h3>
						<Notifications />
					</aside>
				</div>
			</div>
		);
	}
}

export default Dashboard;
