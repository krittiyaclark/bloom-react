import React, { Component } from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../components/Footer/Footer';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './Layout.css';

class Layout extends Component {
	state = {
		showSideDrawer: false,
		currentUser: null,
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

	// User sign-in
	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapShot) => {
					this.setState(
						{
							currentUser: {
								id: snapShot.id,
								...snapShot.data(),
							},
						},
						() => {
							console.log(this.state);
						}
					);
				});
			}

			this.setState({ currentUser: userAuth });
		});
	}

	// Close subscription
	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div className='wrapper'>
				<Toolbar
					drawerToggleClicked={this.sideDrawerToggleHandler}
					currentUser={this.state.currentUser}
				/>
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
