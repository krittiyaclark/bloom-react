import React from 'react';
import { Link } from 'react-router-dom';

import SignInLinks from '../SignInLinks/SignInLink';
import SignOutLinks from '../SignOutLinks/SignOutLink';
import Input from '../../UI/Input/Input';

import './Navbar.css';

const Navbar = () => {
	return (
		<div className='wrapper'>
			<header>
				<nav>
					<div className='nav-left '>
						<Link to='/'>Bloom.</Link>
					</div>
					<div className='nav-center'>
						<Input />
					</div>
					<div className='nav-right'>
						<SignInLinks />
						<SignOutLinks />
					</div>
				</nav>
			</header>
		</div>
	);
};

export default Navbar;
