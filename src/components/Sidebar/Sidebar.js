import React from 'react';
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink,
} from './SidebarStyles';
import { DataConsumer } from '../../Context/Context';
import { scroller } from 'react-scroll';

const Sidebar = () => {
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
				const { isopen, toggle, Links } = value;
				return (
					<SidebarContainer isopen={isopen} onClick={toggle}>
						<Icon onClick={toggle}>
							<CloseIcon />
						</Icon>
						<SidebarWrapper>
							<SidebarMenu onClick={toggle}>
								{Links.map((item) => (
									<SidebarLink
										to={item.path}
										onClick={() => scrollToElement(item.scrolling)}
										key={item.id}
									>
										{item.link}
									</SidebarLink>
								))}
							</SidebarMenu>
						</SidebarWrapper>
					</SidebarContainer>
				);
			}}
		</DataConsumer>
	);
};

export default Sidebar;
