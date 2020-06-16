import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import FormInput from '../../../components/UI/FormInput/FormInput';
import Button from '../../../components/UI/Button/Button';

import { signUp } from '../../../redux/auth/auth.actions';

import './SignUp.css';

class SignUp extends Component {
	state = {
		firstName: '',
		lastName: '',
		email: '',
		password: '',
	};

	handleSubmit = (event) => {
		event.preventDefault();

		this.props.signUp(this.state);
	};

	handleChange = (event) => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
		console.log(event);
	};

	render() {
		const { firstName, lastName, email, password } = this.state;

		const { auth, authError } = this.props;
		if (auth.uid) return <Redirect to='/' />;
		return (
			<div className='sign-up'>
				<form onSubmit={this.handleSubmit} className='col'>
					<h2 className='text-grey'>I do not have a account</h2>
					<p className='title'>Sign up with your email and password</p>
					<div className='input-field'>
						<FormInput
							type='text'
							name='firstName'
							value={firstName}
							onChange={this.handleChange}
							label='First Name'
							required
						/>
						<FormInput
							type='text'
							name='lastName'
							value={lastName}
							onChange={this.handleChange}
							label='Last Name'
							required
						/>
						<FormInput
							type='email'
							name='email'
							handleChange={this.handleChange}
							value={email}
							label='email'
							required
						/>
					</div>
					<div className='input-field'>
						<FormInput
							type='password'
							name='password'
							handleChange={this.handleChange}
							value={password}
							label='password'
							required
						/>
					</div>
					<div className='input-field'>
						<Button type='submit'>Sign Up</Button>
						<div className='text-danger center'>
							{authError ? <p>{authError}</p> : null}
						</div>
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log(state);
	return {
		auth: state.firebase.auth,
		authError: state.auth.authError,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		signUp: (newUser) => {
			dispatch(signUp(newUser));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
