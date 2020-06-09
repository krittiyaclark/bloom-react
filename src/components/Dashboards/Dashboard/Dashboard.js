import React, { Component } from 'react';

import Notification from '../Notification/Notifications';
import PostList from '../../Posts/PostList';

import './Dashboard.css';

class Dashboard extends Component {
	render() {
		console.log(this.props);
		const { posts } = this.props;
		return (
			<>
				<section>
					<h3 className='section-title'>Today</h3>
					<PostList postLists={posts} />
				</section>

				<aside>
					<h3 className='section-title'>Notifications</h3>
					<Notification />
				</aside>
			</>
		);
	}
}

export default Dashboard;
