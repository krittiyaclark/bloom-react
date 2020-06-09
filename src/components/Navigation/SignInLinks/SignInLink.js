import React from 'react';
import { NavLink } from 'react-router-dom';

import './SignInLink.css';

const SignInLinks = (props) => (
	<ul className='nav-links'>
		<li>
			<NavLink to='/createpost' className='link'>
				Create Post
			</NavLink>
		</li>
		<li>
			<NavLink to='/' className='link'>
				Sign Out
			</NavLink>
		</li>
		<li>
			<NavLink to='/' className='link'>
				USR ICON
			</NavLink>
		</li>
	</ul>
);

export default SignInLinks;
