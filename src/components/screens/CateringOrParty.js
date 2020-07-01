import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import PartyAndCatering from '../layout/home/PartyAndCatering';
import FooterBungalow from '../layout/home/FooterBungalow';
const CateringOrParty = () => {
	const { isLightTheme, light, dark } = useContext(ThemeContext);
	const theme = isLightTheme ? light : dark;
	return (
		<div style={{ display: 'flex', flexDirection: 'column', backgroundColor: theme.bg,}}>
            <br/>
            <br/>
			<PartyAndCatering />
            <br/>
            <br/>
<FooterBungalow/>
		</div>
	);
};

export default CateringOrParty;
