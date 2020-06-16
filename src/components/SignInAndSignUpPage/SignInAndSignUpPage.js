import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import SignIn from '../../container/Auth/SignIn/SignIn';
import SignUp from '../../container/Auth/SignUp/SignUp';

import './SignInAndSignUpPage.css';

const SignInAndSignUpPage = (props) => {
	const { auth } = props;
	if (auth.uid) return <Redirect to='/' />;
	return (
		<div className='sign-in-and-sign-up'>
			<SignIn />
			<SignUp />
		</div>
	);
};

const mapStateToProps = (state) => {
	console.log(state);
	return {
		auth: state.firebase.auth,
	};
};

export default connect(mapStateToProps)(SignInAndSignUpPage);
