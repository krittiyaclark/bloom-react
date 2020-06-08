import React from 'react';

import './Button.css';

const Button = ({ children, ...otherProps }) => (
	<button className='custom-button' {...otherProps}>
		{children}
	</button>
);

export default Button;
