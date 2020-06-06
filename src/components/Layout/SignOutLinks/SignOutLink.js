import React from 'react';
import { NavLink } from 'react-router-dom';

import './SignOutLink.css';

const SignOutLinks = (props) => (
	<ul className='nav-links'>
		<li className='link'>
			<NavLink to='/'>Sign In</NavLink>
		</li>
	</ul>
);

export default SignOutLinks;
