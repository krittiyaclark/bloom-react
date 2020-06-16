import React from 'react';

import Card from '../UI/Card/Card';
import Thumbnail from '../UI/Thumbnail/Thumbnail';

import './Posts.css';

const PostSummary = ({ postList }) => {
	console.log(postList);

	let today = {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
	};

	return (
		<Card>
			<div className='PostWrapper'>
				<Thumbnail>
					<img src='https://via.placeholder.com/150' alt='thumbnail' />
				</Thumbnail>

				<div className='content'>
					<h2>{postList.title}</h2>
					<p>{postList.content}</p>
					<p>
						Posted by {postList.authorFirstName} {postList.authorLastName}
					</p>
					<p>
						{postList.createdAt.toDate().toLocaleDateString('en-US', today)}
					</p>
				</div>
			</div>
		</Card>
	);
};

export default PostSummary;
