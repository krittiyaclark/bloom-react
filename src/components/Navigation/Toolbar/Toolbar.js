import React from 'react';
import { connect } from 'react-redux';

import SignInLinks from '../SignInLinks/SignInLink';
import SignOutLinks from '../SignOutLinks/SignOutLink';
import Input from '../../UI/Input/Input';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

import './Toolbar.css';

const Toolbar = ({ auth, drawerToggleClicked }) => {
	// console.log(props);

	// const links = auth ? <SignInLinks /> : <SignOutLinks />;
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

				<div className='Toolbar-Right'>
					<SignInLinks /> <SignOutLinks />
				</div>
			</div>
		</header>
	);
};

const mapStateToProps = (state) => {
	console.log(state);
	return {
		auth: state.auth.authError,
	};
};

export default connect(mapStateToProps)(Toolbar);
