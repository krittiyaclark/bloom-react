import React, { Component } from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../components/Footer/Footer';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import './Layout.css';

class Layout extends Component {
	state = {
		showSideDrawer: false,
	};

	// sideDrawer
	sideDrawerClosedHandler = () => {
		this.setState({ showSideDrawer: false });
	};

	sideDrawerToggleHandler = () => {
		this.setState((prevState) => {
			return { showSideDrawer: !prevState.showSideDrawer };
		});
	};

	render() {
		return (
			<div className='wrapper'>
				<Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
				<SideDrawer
					closed={this.sideDrawerClosedHandler}
					open={this.state.showSideDrawer}
				/>
				<div className='container'>
					<section>{this.props.children}</section>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Layout;
