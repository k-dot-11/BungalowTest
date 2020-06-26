import React from 'react';
import { Container, Typography, Grid, Button } from '@material-ui/core';
import { ThemeContext } from '../../../contexts/ThemeContext';

const Hero = () => {
	return (
		<ThemeContext.Consumer>
			{(context) => {
				const {toggleTheme} = context;
				return (
					<div
						style={{
							backgroundImage:
								'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)',
							paddingTop: '60px'
						}}
					>
						<Container style={{ flex: 10, backgroundColor: 'transparent' }} maxWidth="sm">
							<Typography align="center" variant="h2" style={styles.heroTitle}>
								Welcome
								<br />
							</Typography>
							<Typography variant="h5" align="center" style={{ color: '#EEE' }} paragraph>
								<br />
								The Bungalow Udaipur a venture of S.D hospitality is a multi cuisine restaurant with
								over a 100 smart casual dining & al fresco seating. Our menu focuses on Indian world
								favorites with a touch of continental and chinese.
							</Typography>
							<Grid container justify="center" style={styles.heroButtons}>
								<Grid item>
									<Button
										variant="contained"
										style={{ backgroundColor: '#ffd600', marginRight: '10px', color: 'black' }}
										onClick={toggleTheme}
									>
										Toggle Theme
									</Button>
								</Grid>
								<Grid item>
									<Button href="/signin" variant="contained" style={styles.heroButton}>
										Menu
									</Button>
								</Grid>
							</Grid>
						</Container>
					</div>
				);
			}}
		</ThemeContext.Consumer>
	);
};

const styles = {
	heroTitle: {
		color: 'white'
	},

	heroButtons: {
		padding: '20px'
	},

	heroButton: {
		marginRight: '10px',
		marginLeft: '10px',
		backgroundColor: 'tomato',
		color: 'white'
	},
	cardMedia: {
		paddingTop: '56.25%' // 16:9
	},
	socialIcon: {
		color: 'white',
		margin: '10px'
	}
};

export default Hero;
