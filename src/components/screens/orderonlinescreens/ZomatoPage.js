import React, { useContext } from 'react';
import {  Button, Hidden,  } from '@material-ui/core';
import { ThemeContext } from '../../../contexts/ThemeContext';
import FooterBungalow from '../../layout/home/FooterBungalow';

const ZomatoPage = () => {
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
			<div style={{display:'flex',justifyContent: 'center',backgroundColor:'white'}}>
				<Hidden smDown>
			<img
			src={require('../../../assets/zomatofirst.jpg')}
				style={{
					width: '50vw',
					height: 'auto',
					display: 'flex',
					alignSelf:'center',
					alignItems: 'center',
					justifyContent: 'center'
				}}
			/>
			</Hidden>
			<Hidden mdUp>
			<img
			src={require('../../../assets/zomatofirst.jpg')}
				style={{
					width: '100vw',
					height: 'auto',
					display: 'flex',
					alignSelf:'center',
					alignItems: 'center',
					justifyContent: 'center'
				}}
			/>
			</Hidden>
			</div>
			<br/>
			<br/>
			<br/>
			<br/>
			<Button
				variant="contained"
				href="https://www.zomato.com/udaipur/the-bungalow-udaipur-panchwati/menu"
				style={{ backgroundColor: '#CB202D', color: 'white', alignSelf: 'center' }}
			>
				Order on Zomato
			</Button>
			<br/>
			<br/>
			<br/>
			<br/>

			<FooterBungalow />
		</div>
	);
};

export default ZomatoPage;
