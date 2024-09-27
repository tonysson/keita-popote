import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import About from './components/About/About';
// import Skills from './components/Skills/Skills';
// import Projects from './components/Projects/Projects';
import { Element } from 'react-scroll';
import { Route, Routes } from 'react-router-dom';
import { DataConsumer } from './Context/Context';
import ScrollTop from './utils/ScrollTop';
import { motion } from 'framer-motion';
import { pageAnimation } from './Animations/Animation';
// import Contact from './components/Contact/Contact';
import Services from './components/Servicess/Services';
import AfricaMenus from './components/Menus/AfricaMenus';
import Contact from './components/Contact/Contact';
//import Drinks from './components/Drinks/Drinks';
import WorldMenus from './components/Menus/WorldMenus';
//import VegetarianMenus from './components/Menus/VegetarianMenus';

const App = () => {
	return (
		<DataConsumer>
			{(value) => {
				return (
					<>
						<ScrollTop />
						<Sidebar />
						<Navbar />

						<motion.div
							variants={pageAnimation}
							initial='hidden'
							exit='exit'
							animate='show'
						>
							<Element name='About'>
								<Routes>
									<Route exact path='/' element={<About />} />
								</Routes>
							</Element>
							<div className='basic'>
								<Element name='Services'>
									<Routes>
										<Route exact path='/' element={<Services />} />
									</Routes>
								</Element>

								<Element name='Menus'>
									<Routes>
										<Route exact path='/' element={<AfricaMenus />} />
									</Routes>
									<Routes>
										<Route exact path='/' element={<WorldMenus />} />
									</Routes>
									
								</Element>
							</div>
							<Element name='Contact'>
								<Routes>
									<Route exact path='/' element={<Contact />} />
								</Routes>
							</Element>
						</motion.div>
					</>
				);
			}}
		</DataConsumer>
	);
};

export default App;
