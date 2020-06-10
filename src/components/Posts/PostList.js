import React from 'react';

import PostSummary from './PostSummary';

const ProjectList = ({ postsLists }) => {
	console.log(postsLists);
	return (
		<>
			{postsLists &&
				postsLists.map((post) => {
					return <PostSummary key={post.id} postList={post} />;
				})}
		</>
	);
};

export default ProjectList;
