import React from 'react';
import { DataConsumer } from '../../Context/Context';
import {
	Nav,
	NavContainer,
	NavLogo,
	MobilIcon,
	NavItem,
	NavMenu,
	NavLinks,
} from './NavStyles';
import { FaBars } from 'react-icons/fa';
import logo from '../../images/KEITA POPOTE2.png';
import { scroller } from 'react-scroll';

const Navbar = () => {
	//Automatic scroll to an element
	const scrollToElement = (element) => {
		scroller.scrollTo(element, {
			duration: 1500,
			delay: 100,
			smooth: true,
			offset: -80,
		});
	};

	return (
		<DataConsumer>
			{(value) => {
				const { Links, toggle, headerShow } = value;
				return (
					<Nav posit={headerShow}>
						<NavContainer>
							<NavLogo to='/' onClick={() => scrollToElement('About')}>
								<img src={logo} alt='logo' />
							</NavLogo>
							<MobilIcon onClick={toggle}>
								<FaBars />
							</MobilIcon>
							<NavMenu>
								{Links.map((item) => (
									<NavItem key={item.id}>
										<NavLinks
											onClick={() => scrollToElement(item.scrolling)}
											to={item.path}
										>
											{item.link}
										</NavLinks>
									</NavItem>
								))}
							</NavMenu>
						</NavContainer>
					</Nav>
				);
			}}
		</DataConsumer>
	);
};

export default Navbar;
