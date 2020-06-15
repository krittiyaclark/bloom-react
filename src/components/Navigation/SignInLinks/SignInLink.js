import React from 'react';
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';
import { signOut } from '../../../redux/user/user.actions';
// import { auth } from '../../../firebase/firebase.utils';

import './SignInLink.css';

const SignInLinks = (props) => (
	<ul className='nav-links'>
		<li>
			<NavLink to='/createpost' className='link'>
				Create Post
			</NavLink>
		</li>
		<li>
			<NavLink to='/' className='link' onClick={props.signOut}>
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

const mapDispatchToProps = (dispatch) => {
	return {
		signOut: () => dispatch(signOut()),
	};
};

export default connect(null, mapDispatchToProps)(SignInLinks);
