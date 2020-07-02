import React, { useContext } from 'react';
import { Paper, Typography, Button } from '@material-ui/core';
import { ThemeContext } from '../../../contexts/ThemeContext';
const MobileCatering = () => {
	const { isLightTheme, dark, light } = useContext(ThemeContext);
	const theme = isLightTheme ? light : dark;
	return (
		<Paper
			style={{ backgroundColor: theme.primary, display: 'flex', alignItems: 'center', flexDirection: 'column', width:'80vw',padding:'20px' }}
		>
			<img
				style={{
					margin: '20px',
					width: '67vw',
					height: 'auto'
				}}
				src={require('../../../assets/party.png')}
			/>

			<Typography style={{ color: 'white', fontWeight: 'bold' }} variant="h2" align="center">
				Small Parties
			</Typography>
			<Typography style={{ color: 'white' }} variant="subtitle1" align="justify">
				<br />
				<br />
				For home parties with extended family and friends upto 70 people or for a cosy gathering of 25 people,
				we are delighted to bring delicious, hot and wholesome food at your doorstep.
			</Typography>
			<Button
				href="/smallparties"
				variant="contained"
				size="large"
				style={{
					alignSelf: 'center',
					color: theme.primary,
					backgroundColor: 'white',
					marginTop: '30px'
				}}
			>
				Plan a Party !{' '}
			</Button>
				<br />

			<img
				style={{
					margin: '20px',
					width: '70vw',
					height: 'auto'
				}}
				src={require('../../../assets/catering.png')}
			/>
			<Typography style={{ color: 'white', fontWeight: 'bold' }} variant="h2" align="center">
				<br />
				Large Catering
			</Typography>
			<Typography style={{ color: 'white' }} variant="subtitle1" align="justify">
				<br />
				<br />
				Be it a get-together for 100 people or a large function for 5000 guests, we ensure that everybody is
				delighted. Complete hygiene, combined with choicest cuisines and exceptional service with competitive
				pricing will ensure that you really celebrate.
			</Typography>
			<Button
				href="/catering"
				variant="contained"
				size="large"
				style={{
					color: theme.primary,
					backgroundColor: 'white',
					marginTop: '30px'
				}}
			>
				Order Now !{' '}
			</Button>
				<br />
				<br />

		</Paper>
	);
};

export default MobileCatering;
