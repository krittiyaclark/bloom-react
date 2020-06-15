import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormInput from '../../../components/UI/FormInput/FormInput';
import Button from '../../../components/UI/Button/Button';

import { auth, signInWithGoogle } from '../../../firebase/firebase.utils';

import { signIn } from '../../../redux/user/user.actions';

import './SignIn.css';

class SignIn extends Component {
	state = {
		email: '',
		password: '',
	};

	handleSubmit = async (event) => {
		event.preventDefault();
		console.log(this.state);

		// const { email, password } = this.state;

		// try {
		// 	await auth.signInWithEmailAndPassword(email, password);
		// 	this.setState({ email: '', password: '' });
		// } catch (error) {
		// 	console.log(error);
		// }
		this.props.signIn(this.state);
	};

	handleChange = (event) => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
		console.log(event);
	};

	render() {
		const { email, password } = this.state;
		const { authError } = this.props;

		return (
			<div className='sign-in'>
				<form onSubmit={this.handleSubmit} className='col'>
					<h2 className='text-grey'>I already have an account</h2>
					<p className='title'>Sign in with your email and password</p>
					<div className='input-field'>
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
					<div className='input-field buttons'>
						<div className='buttons'>
							<Button type='submit'>SignIn</Button>
							<Button type='submit' onClick={signInWithGoogle} isGoogleSignIn>
								{' '}
								SignIn With Google{' '}
							</Button>
						</div>
					</div>
					<div className='authError'>
						{authError ? <p>{authError}</p> : null}
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log(state);
	return {
		authError: state.auth.authError,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		signIn: (cred) => dispatch(signIn(cred)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
