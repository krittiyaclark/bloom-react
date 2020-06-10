import React, { Component } from 'react';

import FormInput from '../../../components/UI/FormInput/FormInput';
import Button from '../../../components/UI/Button/Button';

import { signInWithGoogle } from '../../../firebase/firebase.utils';

import './SignIn.css';

class SignIn extends Component {
	state = {
		email: '',
		password: '',
	};

	handleSubmit = (event) => {
		event.preventDefault();
		console.log(this.state);
	};

	handleChange = (event) => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
		console.log(event);
	};

	render() {
		const { email, password } = this.state;
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
						<Button type='submit'>SignIn</Button>
						<Button
							className='btn bg-info'
							type='submit'
							onClick={signInWithGoogle}>
							{' '}
							SignIn With Google{' '}
						</Button>

						<div className='text-danger center'></div>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
