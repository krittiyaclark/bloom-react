import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import { createPost } from '../../redux/post/post.actions';
import FormInput from '../../components/UI/FormInput/FormInput';
import FormTextArea from '../../components/UI/FormTextArea/FormTextArea';
import Button from '../../components/UI/Button/Button';
import Card from '../../components/UI/Card/Card';

class CreatePost extends Component {
	state = {
		title: '',
		content: '',
	};

	handleSubmit = (event) => {
		event.preventDefault();
		console.log(this.state);
		this.props.createPost(this.state);
		// Redirect the user to the home page after posted
		this.props.history.push('/');

		this.setState({
			title: '',
			content: '',
		});
	};

	handleChange = (event) => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		const { auth } = this.props;
		if (!auth.uid) return <Redirect to='/signinsignup' />;
		return (
			<Card>
				<form onSubmit={this.handleSubmit} className='bg-white'>
					<h2 className='text-grey'>Create New Post</h2>
					<div className='input-field'>
						<FormInput
							type='text'
							name='title'
							handleChange={this.handleChange}
							value={this.state.title}
							label='Title'
						/>
					</div>
					<div className='input-field'>
						<FormTextArea
							type='text'
							name='content'
							handleChange={this.handleChange}
							value={this.state.content}
							label='Content'
						/>
					</div>
					<div className='input-field'>
						<Button type='submit'>Create Post</Button>
						<div className='text-danger center'>
							{this.authError ? <p>{this.authError}</p> : null}
						</div>
					</div>
				</form>
			</Card>
		);
	}
}

const mapStateToProps = (state) => {
	console.log(state);
	return {
		auth: state.firebase.auth,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		createPost: (post) => {
			dispatch(createPost(post));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
