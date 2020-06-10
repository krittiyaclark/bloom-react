import React, { Component } from 'react';

import FormInput from '../../../components/UI/FormInput/FormInput';
import Button from '../../../components/UI/Button/Button';

import {
	auth,
	createUserProfileDocument,
} from '../../../firebase/firebase.utils';

import './SignUp.css';

class SignUp extends Component {
	state = {
		displayName: '',
		email: '',
		password: '',
		confirmPassword: '',
	};

	handleSubmit = async (event) => {
		event.preventDefault();

		const { displayName, email, password, confirmPassword } = this.state;

		console.log(this.state);

		if (password !== confirmPassword) {
			alert("passwords don't match");
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);

			await createUserProfileDocument(user, { displayName });

			this.setState({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: '',
			});
		} catch (error) {
			console.error(error);
		}
	};

	handleChange = (event) => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
		console.log(event);
	};

	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<div className='sign-up'>
				<form onSubmit={this.handleSubmit} className='col'>
					<h2 className='text-grey'>I do not have a account</h2>
					<p className='title'>Sign up with your email and password</p>
					<div className='input-field'>
						<FormInput
							type='text'
							name='displayName'
							value={displayName}
							onChange={this.handleChange}
							label='Display Name'
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
						<FormInput
							type='password'
							name='confirmPassword'
							handleChange={this.handleChange}
							value={confirmPassword}
							label='confirm password'
							required
						/>
					</div>
					<div className='input-field'>
						<Button type='submit'>Sign Up</Button>
						<div className='text-danger center'></div>
					</div>
				</form>
			</div>
		);
	}
}

export default SignUp;
