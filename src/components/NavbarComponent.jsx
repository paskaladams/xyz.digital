import { useState, useEffect } from 'react';
import { Navbar, Container, Nav, NavbarBrand, NavbarCollapse } from 'react-bootstrap';
import { navLinks } from '../data/index';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const NavbarComponent = () => {
	const [changeColor, setChangeColor] = useState(false);
	const changeBackgroundColor = () => {
		if (window.scrollY > 10) {
			setChangeColor(true);
		} else {
			setChangeColor(false);
		}
	};
	useEffect(() => {
		changeBackgroundColor();

		window.addEventListener('scroll', changeBackgroundColor);
	});

	let navigate = useNavigate();
	return (
		<Navbar expand="lg" className={changeColor ? "color-active" : ""}>
			<Container>
				<NavbarBrand onClick={() => navigate('/')} className="title fs-3 fw-bold">XYZ.Digital</NavbarBrand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<NavbarCollapse id="basic-navbar-nav">
					<Nav className="mx-auto text-center">
						{navLinks.map((link) => {
							return (
								<div className="nav-link" key={link.id}>
									<NavLink to={link.path} className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')} end>
										{link.text}
									</NavLink>
								</div>
							);
						})}
					</Nav>
				</NavbarCollapse>
			</Container>
		</Navbar>
	);
};

export default NavbarComponent;
