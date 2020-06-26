import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Paper, Typography } from '@material-ui/core';
import { ThemeContext } from '../../../contexts/ThemeContext';
const FooterBungalow = () => {
	return (
		<ThemeContext.Consumer>
			{(context) => {
				const { isLightTheme, light, dark } = context;
				const theme = isLightTheme ? light : dark;
				const styles = {
					socialIcon: {
						color: theme.syntax,
						margin: '10px'
					}
				};
				return (
					<Paper elevation={6} style={{ backgroundColor: theme.paper, padding: '40px' }}>
						<footer
							style={{
								display: 'flex',
								flexDirection: 'column',
								maxWidth: 'md',
								alignItems: 'center',
								justifyContent: 'center'
							}}
						>
							<Typography variant="h6" align="center" gutterBottom style={{ color: theme.title}}>
								A unit of S.D hospitality
							</Typography>
							<Typography
								align="center"
								style={{ color: theme.syntax, marginTop: '20px', paddingBottom: '30px' }}
							>
								Terms & Conditions | Refunds Policy | Privacy Policy
							</Typography>
							<div style={{ display: 'flex' }}>
								<FacebookIcon align="center" style={styles.socialIcon} />
								<InstagramIcon align="center" style={styles.socialIcon} />
								<TwitterIcon align="center" style={styles.socialIcon} />
							</div>
							<Typography
								align="center"
								style={{ color: theme.syntax, marginTop: '20px', paddingBottom: '30px' }}
							>
								Copyright © The Bungalow 2020.
							</Typography>
						</footer>
					</Paper>
				);
			}}
		</ThemeContext.Consumer>
	);
};



export default FooterBungalow;
