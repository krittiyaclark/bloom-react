import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Layout/Navbar/Navbar';
import Dashboard from './components/Dashboards/Dashboard';
import PostDetail from './components/Posts/PostDetail';
import SignInAndSignUpPage from './components/SignInAndSignUpPage/SignInAndSignUpPage';
import CreatePost from './container/CreatePost/CreatePost';

import './App.css';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route path='/' exact component={Dashboard} />
				<Route path='/post/:id' component={PostDetail} />
				<Route path='/signinsignup' component={SignInAndSignUpPage} />
				<Route path='/createpost' component={CreatePost} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
