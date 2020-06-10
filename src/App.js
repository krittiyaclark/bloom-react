import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './container/Layout/Layout';
import Dashboard from './components/Dashboards/Dashboard/Dashboard';
import PostDetail from './components/Posts/PostDetail';
import SignInAndSignUpPage from './components/SignInAndSignUpPage/SignInAndSignUpPage';
import CreatePost from './container/CreatePost/CreatePost';

import './App.css';

function App() {
	return (
		<Layout>
			<Switch>
				<Route path='/' exact component={Dashboard} />
				<Route path='/post/:id' component={PostDetail} />
				<Route path='/signinsignup' component={SignInAndSignUpPage} />
				<Route path='/createpost' component={CreatePost} />
			</Switch>
		</Layout>
	);
}

export default App;
