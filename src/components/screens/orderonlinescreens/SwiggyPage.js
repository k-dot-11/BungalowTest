import React, { useContext } from 'react';
import { Button, Hidden } from '@material-ui/core';
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
			<div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#FC9019' }}>
				<Hidden smDown>
					<img
						src={require('../../../assets/swiggyalt.png')}
						style={{
							width: 'auto',
							height: '500px',
							backgroundImage: `url(${require('../../../assets/swiggy.png')})`,
							display: 'flex',
							alignSelf: 'center',
							alignItems: 'center',
							justifyContent: 'center'
						}}
					/>
				</Hidden>
				<Hidden mdUp>
					<img
						src={require('../../../assets/swiggyalt.png')}
						style={{
							width: 'auto',
							height: '60vw',
							backgroundImage: `url(${require('../../../assets/swiggy.png')})`,
							display: 'flex',
							alignSelf: 'center',
							alignItems: 'center',
							justifyContent: 'center'
						}}
					/>
				</Hidden>
			</div>
			<br />
			<br />
			<br />
			<Button
				variant="contained"
				href="https://www.swiggy.com/restaurants/the-bungalow-epip-zone-whitefield-bangalore-1359"
				style={{ backgroundColor: '#FC8019', color: 'white', alignSelf: 'center' }}
			>
				Order on Swiggy
			</Button>
			<br />
			<br />
			<br />

			<FooterBungalow />
		</div>
	);
};

export default SwiggyPage;
