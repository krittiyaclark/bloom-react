import React from 'react';
import { connect } from 'react-redux';

import SignInLinks from '../SignInLinks/SignInLink';
import SignOutLinks from '../SignOutLinks/SignOutLink';
import Input from '../../UI/Input/Input';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

import './Toolbar.css';

const Toolbar = ({ currentUser, drawerToggleClicked }) => {
	// console.log(props);

	const links = currentUser ? <SignInLinks /> : <SignOutLinks />;
	return (
		<header>
			<div className='Toolbar-Nav'>
				<div className='Toolbar-Left'>
					<DrawerToggle clicked={drawerToggleClicked} />
					<div>Logo</div>
				</div>

				<div className='Toolbar-Center'>
					<Input />
				</div>

				<div className='Toolbar-Right'>{links}</div>
			</div>
		</header>
	);
};

const mapStateToProps = (state) => {
	console.log(state);
	return {
		currentUser: state.user.currentUser,
	};
};

export default connect(mapStateToProps)(Toolbar);
