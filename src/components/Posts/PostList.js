import React from 'react';

import PostSummary from './PostSummary';

const ProjectList = ({ postLists }) => {
	console.log(postLists);
	return (
		<>
			<PostSummary />
			<PostSummary />
		</>
	);
};

export default ProjectList;
