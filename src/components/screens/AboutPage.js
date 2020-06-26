import React from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const AboutPage = () => {
	return (
		<ThemeContext.Consumer>
			{(context) => {
				const { isLightTheme, light, dark } = context;
				const theme = isLightTheme ? light : dark;
				return (
					<div style={{backgroundColor:theme.bg}}>
						<ul>
							<li style = {{color: theme.syntax}}>the way of kings</li>
							<li style = {{color: theme.syntax}}>the name of the wind</li>
							<li style = {{color: theme.syntax}}>the final empire</li>
						</ul>
					</div>
				);
			}}
		</ThemeContext.Consumer>
	);
};

export default AboutPage;
