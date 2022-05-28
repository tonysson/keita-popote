import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Nav = styled.nav`
	background: ${(props) => (props.posit ? '#282828' : ' #1b1b1b')};
	height: 110px;
	/* margin-top : -80px ;  */
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	position: sticky;
	top: 0;
	z-index: 10;
	@media screen and (max-width: 960px) {
		transition: 0.8s all ease;
	}
`;
export const NavContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 110px;
	z-index: 1;
	width: 100%;
	padding: 0 15px;
	max-width: 1152px;
	margin: 0 auto;
`;

export const NavLogo = styled(Link)`
	justify-self: flex-start;
	cursor: pointer;
	display: flex;
	align-items: center;
	margin-bottom: 12px;
	img {
		width: 175px;
		object-fit: contain;
	}
	@media screen and (max-width: 768px) {
		img {
			width: 150px;
			object-fit: contain;
		}
	}
`;

export const MobilIcon = styled.div`
	display: none;
	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 18px;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
		color: #fff;
		transition: 0.2s ease-in-out;
		&:hover {
			color: #f9c74f;
			transition: 0.2s ease-in-out;
		}
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	margin-right: -22px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavItem = styled.li`
	height: 110px;
	font-size: 1.1rem;
	line-height: 30px;
	font-family: 'Made gentle', 'Trebuchet MS', 'sans-serif';
	font-weight: 500;
	letter-spacing: 1.2px;
	transition: all 0.2s ease-in-out;
`;

export const NavLinks = styled(Link)`
	color: #fff;
	display: flex;
	align-items: center;
	height: 100%;
	padding: 0 1rem;
	text-decoration: none;
	cursor: pointer;
	transition: all 0.5s ease-in-out;

	&.active {
		border-bottom: 3px solid #f9c74f;
	}

	&:hover {
		color: #f9c74f;
		transition: all 0.5s ease-in-out;
	}
`;
