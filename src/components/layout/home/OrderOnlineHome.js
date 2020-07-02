import React from 'react';
import { Paper, Container, Button, Typography } from '@material-ui/core';
import { ThemeContext } from '../../../contexts/ThemeContext';

const OrderOnlineHome = () => {
	return (
		<ThemeContext.Consumer>
			{(context) => {
				const { isLightTheme, light, dark } = context;
				const theme = isLightTheme ? light : dark;
				return (
					<Container
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							flexDirection: 'column'
						}}
					>
						<Paper
							elevation={3}
							style={{
								backgroundColor: theme.paper,
								padding: '50px',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								flexDirection: 'column'
							}}
						>
							<Typography align="center" variant="h2" style={{ color: theme.primary, fontWeight: 'bold' }}>
								Order Online <br />
							</Typography>
							<div style={{ margin:'10px'}}>
								<Typography align="center" style={{ color: theme.syntax, size: '30px' }}>
									________<br />
									<br />
									Hungry? Bored? Excited? Tasty food satiates all. Order from the Time Tested yet New,
									Award Winning yet Evolving, Exotic yet Affordable but always delicious food from
									Utsav.<br />
									<br />
								</Typography>
							</div>
							<br />
							<Button
								size="large"
								href="/orderonline"
								variant="outlined"
								style={{ color: theme.primary, borderColor: theme.primary }}
							>
								Order Online
							</Button>
						</Paper>
					</Container>
				);
			}}
		</ThemeContext.Consumer>
	);
};

export default OrderOnlineHome;
