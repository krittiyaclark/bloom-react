import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './container/Layout/Layout';
import Dashboard from './components/Dashboards/Dashboard/Dashboard';
import PostDetail from './components/Posts/PostDetail';
import SignInAndSignUpPage from './components/SignInAndSignUpPage/SignInAndSignUpPage';
import CreatePost from './container/CreatePost/CreatePost';

import './App.css';

function App({ currentUser }) {
	return (
		<Layout>
			<Switch>
				<Route exact path='/' component={Dashboard} />
				<Route path='/post/:id' component={PostDetail} />
				<Route
					exact
					path='/signinsignup'
					render={() =>
						currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />
					}
				/>
				<Route path='/createpost' component={CreatePost} />
			</Switch>
		</Layout>
	);
}

const mapStateToProps = (state) => {
	console.log(state);
	return {
		currentUser: state.user.currentUser,
	};
};

export default connect(mapStateToProps)(App);
