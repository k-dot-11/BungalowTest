import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import PartyAndCatering from '../layout/home/PartyAndCatering';
import FooterBungalow from '../layout/home/FooterBungalow';
import NewParty from '../layout/home/NewParty';
import { Hidden } from '@material-ui/core';
const CateringOrParty = () => {
	const { isLightTheme, light, dark } = useContext(ThemeContext);
	const theme = isLightTheme ? light : dark;
	return (
		<div style={{ display: 'flex', flexDirection: 'column', backgroundColor: theme.bg }}>
			<br />
			<br />
			<Hidden smDown>
				<NewParty xs={12} sm={12} />
			</Hidden>
			<Hidden mdUp>
				<PartyAndCatering xs={12} sm={12} />
			</Hidden>
			<br />
			<br />
			<FooterBungalow />
		</div>
	);
};

export default CateringOrParty;
