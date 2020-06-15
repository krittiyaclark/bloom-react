import React from 'react';

import PostSummary from './PostSummary';

const ProjectList = ({ postsLists }) => {
	console.log(postsLists);
	return (
		<>
			{postsLists &&
				postsLists.map((post, index) => {
					return <PostSummary key={index} postList={post} />;
				})}
		</>
	);
};

export default ProjectList;
