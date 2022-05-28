import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
export const SidebarContainer = styled(motion.aside)`
	position: fixed;
	z-index: 999;
	width: 100%;
	height: 100%;
	background: #282828;
	display: grid;
	align-items: center;
	top: 0;
	left: 0;
	transition: 0.3s ease-in-out;
	opacity: ${({ isopen }) => (isopen ? '100%' : '0')};
	top: ${({ isopen }) => (isopen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
	color: #f7f7f7;
	transition: 0.2s ease-in-out;

	&:hover {
		color: #f9c74f;
		transition: 0.2s ease-in-out;
	}
`;
export const Icon = styled(motion.div)`
	position: absolute;
	top: 1.2rem;
	right: 1.5rem;
	background: transparent;
	font-size: 2rem;
	cursor: pointer;
	outline: none;
`;

export const SidebarWrapper = styled(motion.div)`
	color: #f7f7f7;
`;

export const SidebarLink = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.2rem;
	text-decoration: none;
	list-style: none;
	transition: 0.2s ease-in-out;
	color: #f7f7f7;
	font-family: 'Made gentle', 'Trebuchet MS', 'sans-serif';
	cursor: pointer;
	letter-spacing: 1.5px;
	line-height: 30px;

	&:hover {
		color: #f9c74f;
		margin-left: 30px;
		transition: 0.2s ease-in-out;
	}
`;

export const SidebarMenu = styled(motion.ul)`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(6, 80px);
	text-align: center;

	@media screen and (max-width: 480px) {
		grid-template-rows: repeat(6, 60px);
		font-family: 'Made gentle', 'Trebuchet MS', 'sans-serif';
	}
`;
