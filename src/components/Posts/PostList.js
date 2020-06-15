import React from 'react';
import { Link } from 'react-router-dom';

import PostSummary from './PostSummary';

const ProjectList = ({ postsLists }) => {
	console.log(postsLists);
	return (
		<>
			{postsLists &&
				postsLists.map((post, index) => {
					return (
						<Link to={'/post/' + post.id} key={post.id}>
							<PostSummary key={post.id} postList={post} />
						</Link>
					);
				})}
		</>
	);
};

export default ProjectList;
