import React from 'react';

import ImagesLogo from '../../assets/images/logo-min.png';
import './Logo.css';

const Logo = (props) => (
	<div style={{ height: props.height }}>
		<img src={ImagesLogo} alt='Bloom Logo' />
		{/* <p>Bloom.</p> */}
	</div>
);

export default Logo;
