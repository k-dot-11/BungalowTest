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
			<img
			src={require('../../../assets/zomatofirst.jpg')}
				style={{
					width: 'auto',
					height: '500px',
					backgroundImage: `url(${require('../../../assets/zomatofirst.jpg')})`,
					display: 'flex',
					alignSelf:'center',
					alignItems: 'center',
					justifyContent: 'center'
				}}
			/>
			</div>
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

			<FooterBungalow />
		</div>
	);
};

export default ZomatoPage;
