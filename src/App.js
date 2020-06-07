import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Layout/Navbar/Navbar';
import Dashboard from './components/Dashboards/Dashboard';
import PostDetail from './components/Posts/PostDetail';

import './App.css';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route path='/' exact component={Dashboard} />
				<Route path='/post/:id' component={PostDetail} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
