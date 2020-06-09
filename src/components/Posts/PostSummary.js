import React from 'react';

import Card from '../UI/Card/Card';
import Thumbnail from '../UI/Thumbnail/Thumbnail';

import './Posts.css';

const PostSummary = ({ postLists }) => {
	console.log(postLists);
	return (
		<Card>
			<Thumbnail>
				<img src='https://via.placeholder.com/150' alt='thumbnail' />
			</Thumbnail>

			<div className='content'>
				<span></span>
				<p>Posted by Pai</p>
				<p>9 November, 9pm</p>
			</div>
		</Card>
	);
};

export default PostSummary;
