import React, { Component } from 'react';
import { connect } from 'react-redux';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../components/Footer/Footer';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { setCurrentUser } from '../../redux/user/user.actions';
import './Layout.css';

class Layout extends Component {
	state = {
		showSideDrawer: false,
		// currentUser: null,
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
		const { setCurrentUser } = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapShot) => {
					setCurrentUser(
						{
							id: snapShot.id,
							...snapShot.data(),
						},
						() => {
							console.log(this.state);
						}
					);
				});
			}

			setCurrentUser(userAuth);
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
					// currentUser={this.state.currentUser}
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

const mapDispatchToProps = (dispatch) => {
	return {
		setCurrentUser: (user) => dispatch(setCurrentUser(user)),
	};
};

export default connect(null, mapDispatchToProps)(Layout);
