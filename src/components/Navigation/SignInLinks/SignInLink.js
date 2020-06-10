import React from 'react';
import { NavLink } from 'react-router-dom';

import { auth } from '../../../firebase/firebase.utils';

import './SignInLink.css';

const SignInLinks = () => (
	<ul className='nav-links'>
		<li>
			<NavLink to='/createpost' className='link'>
				Create Post
			</NavLink>
		</li>
		<li>
			<NavLink to='/' className='link' onClick={() => auth.signOut()}>
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
