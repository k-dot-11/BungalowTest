import React, { useContext } from 'react';
import {  Button, Hidden,  } from '@material-ui/core';
import { ThemeContext } from '../../../contexts/ThemeContext';
import FooterBungalow from '../../layout/home/FooterBungalow';

const SwiggyPage = () => {
	const { isLightTheme, dark, light } = useContext(ThemeContext);
	const theme = isLightTheme ? light : dark;
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				backgroundColor: theme.bg
			}}
		>
			<Hidden smDown>
			<img
			src={require('../../../assets/swiggy.png')}
				style={{
					width: '100vw',
					height: '500px',
					backgroundImage: `url(${require('../../../assets/swiggy.png')})`,
					display: 'flex',
					alignSelf:'center',
					alignItems: 'center',
					justifyContent: 'center'
				}}
			/>
			</Hidden>
			<Button
				variant="contained"
				href="https://www.swiggy.com/restaurants/the-bungalow-epip-zone-whitefield-bangalore-1359"
				style={{ backgroundColor: '#FC8019', color: 'white', alignSelf: 'center' }}
			>
				Order on Swiggy
			</Button>

			<FooterBungalow />
		</div>
	);
};

export default SwiggyPage;
