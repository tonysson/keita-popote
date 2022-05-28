import React, { createContext } from 'react';
// import { devSkills, Links, Projects } from './Data';
import { Links } from './Data';
const DataContext = createContext();

class DataProvider extends React.Component {
	state = {
		Links,

		isopen: false,
		headerShow: false,
	};

	// TOGGLE NAVBAR
	toggle = () => {
		this.setState({
			isopen: !this.state.isopen,
		});
	};

	//Scrol effect

	componentDidMount() {
		window.addEventListener('scroll', this.scrolleEffect);
	}
	scrolleEffect = () => {
		if (window.scrollY > 50) {
			this.setState({
				headerShow: true,
			});
		} else {
			this.setState({
				headerShow: false,
			});
		}
	};

	render() {
		return (
			<DataContext.Provider
				value={{
					...this.state,
					toggle: this.toggle,
				}}
			>
				{this.props.children}
			</DataContext.Provider>
		);
	}
}

const DataConsumer = DataContext.Consumer;

export { DataProvider, DataConsumer };
