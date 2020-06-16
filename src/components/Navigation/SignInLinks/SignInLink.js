import React from 'react';
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';
import { signOut } from '../../../redux/auth/auth.actions';
// import { auth } from '../../../firebase/firebase.utils';

import './SignInLink.css';

const SignInLinks = ({ signOut, profile }) => (
	<ul className='nav-links'>
		<li>
			<NavLink to='/createpost' className='link'>
				Create Post
			</NavLink>
		</li>
		<li>
			<NavLink to='/' className='link' onClick={signOut}>
				Sign Out
			</NavLink>
		</li>
		<li>
			<NavLink to='/' className='link'>
				{profile.initials}
			</NavLink>
		</li>
	</ul>
);

const mapStateToProps = (state) => {
	console.log(state);
	return {
		profile: state.firebase.profile,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		signOut: () => dispatch(signOut()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInLinks);
