import React from 'react';

import PostSummary from './PostSummary';

const ProjectList = ({ postLists }) => {
	console.log(postLists);
	return (
		<PostSummary />
		// <>
		// 	{postLists &&
		// 		postLists.map((post) => {
		// 			return <PostSummary key={post.id} postLists={post} />;
		// 		})}
		// </>
	);
};

export default ProjectList;
