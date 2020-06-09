import React from 'react';

import './Thumbnail.css';

const Thumbnail = (props) => {
	return <div className='Thumbnail-container'>{props.children}</div>;
};

export default Thumbnail;
