import React from 'react';

import Logo from '../../Logo/Logo';
import SignInLinks from '../SignInLinks/SignInLink';
import SignOutLinks from '../SignOutLinks/SignOutLink';
import Input from '../../UI/Input/Input';
import Backdrop from '../../UI/Backdrop/Backdrop';

import './SideDrawer.css';

const SideDrawer = (props) => {
	let attachedClasses = ['SideDrawer', 'Close'];
	if (props.open) {
		attachedClasses = ['SideDrawer', 'Open'];
	}
	return (
		<>
			<Backdrop show={props.open} clicked={props.closed} />

			<div className={attachedClasses.join(' ')}>
				<div>
					<Logo height='11%' />
				</div>
				<nav>
					<SignInLinks />
					<SignOutLinks />
					<Input />
				</nav>
			</div>
		</>
	);
};

export default SideDrawer;
