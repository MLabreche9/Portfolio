import React, { Component } from 'react';
import {
	Nav,
	Navbar,
	NavbarBrand,
	NavbarToggler,
	Collapse,
	NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
	constructor(props) {
		super(props);

		this.toggleNav = this.toggleNav.bind(this);
		this.state = {
			isNavOpen: false
		};
	}

	toggleNav() {
		this.setState({
			isNavOpen: !this.state.isNavOpen
		});
	}

	render() {
		return (
			<Navbar sticky='top' expand='md'>
				<div className='container'>
					<NavbarBrand className='mr-auto' href='/'>
						<img src='/assets/logo3.png' height='150' width='auto' alt='logo' />
					</NavbarBrand>

					<NavbarToggler onClick={this.toggleNav} />

					<Collapse isOpen={this.state.isNavOpen} navbar>
						<Nav
							navbar
							className='justify-content-end sticky-top'
							style={{ width: '100%' }}
						>
							<NavItem>
								<NavLink className='nav-link' to='/home'>
									Home
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className='nav-link' to='/about'>
									{' '}
									About{' '}
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className='nav-link' to='/projects'>
									{' '}
									Projects{' '}
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className='nav-link' to='/contact'>
									Contact
								</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</div>
			</Navbar>
		);
	}
}

export default Header;
