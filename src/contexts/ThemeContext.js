import React, { createContext, Component } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
	state = {
		isLightTheme: false,
		light: {
			title: '#000',
			syntax: '#222',
			paper: '#eee',
			bg: '#eee',
			footerColor: 'tomato',
			primary: 'tomato',

		},
		dark: {
			syntax: '#ddd',
			bg: '#252522',
			paper: '#444',
			title: '#ffffff',
			footerColor: '#444',
			primary: 'tomato',

		},

	};

	toggleTheme = () => {
		this.setState({ isLightTheme: !this.state.isLightTheme });
	};

	render() {
		return (
			<ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
				{this.props.children}
			</ThemeContext.Provider>
		);
	}
}

export default ThemeContextProvider;
