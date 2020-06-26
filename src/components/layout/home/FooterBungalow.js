import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Paper, Typography } from '@material-ui/core';
const FooterBungalow = () => {
	return (
		<div style={{ backgroundColor: '#444444', padding: '40px' }}>
			<footer
				style={{
					display: 'flex',
					flexDirection: 'column',
					backgroundColor: '#444444',
					maxWidth: 'md',
					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
				<Typography variant="h6" align="center" gutterBottom style={{ color: 'white' }}>
					A unit of S.D hospitality
				</Typography>
				<Typography align="center" style={{ color: 'white', marginTop: '20px', paddingBottom: '30px' }}>
					Terms & Conditions | Refunds Policy | Privacy Policy
				</Typography>
				<div style={{ display: 'flex' }}>
					<FacebookIcon align="center" style={styles.socialIcon} />
					<InstagramIcon align="center" style={styles.socialIcon} />
					<TwitterIcon align="center" style={styles.socialIcon} />
				</div>
				<Typography align="center" style={{ color: 'white', marginTop: '20px', paddingBottom: '30px' }}>
					Copyright © The Bungalow 2020.
				</Typography>
			</footer>
		</div>
	);
};

const styles = {
	socialIcon: {
		color: 'white',
		margin: '10px'
	}
};

export default FooterBungalow;
