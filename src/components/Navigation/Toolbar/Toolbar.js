import React from 'react';

import SignInLinks from '../SignInLinks/SignInLink';
import SignOutLinks from '../SignOutLinks/SignOutLink';
import Input from '../../UI/Input/Input';

import './Toolbar.css';

const Toolbar = (props) => {
	console.log(props);

	return (
		<header>
			<div className='Toolbar-Nav'>
				<div className='Toolbar-Left'>
					<div>MENU</div>
					<div>DrawerToggle</div>
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

export default Toolbar;
