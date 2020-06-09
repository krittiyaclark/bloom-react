import React, { Component } from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../components/Footer/Footer';

import './Layout.css';

class Layout extends Component {
	state = {};

	render() {
		return (
			<div className='wrapper'>
				<Toolbar />
				{/* <div>SideDrawer</div> */}
				<div className='container'>
					<section>{this.props.children}</section>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Layout;
