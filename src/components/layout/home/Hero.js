import React from 'react';
import { Parallax, Background } from 'react-parallax';
import { Container, Typography, Grid, Button } from '@material-ui/core';
import { ThemeContext } from '../../../contexts/ThemeContext';

const Hero = () => {
	return (
		<ThemeContext.Consumer>
			{(context) => {
				const { toggleTheme } = context;
				const { isLightTheme, light, dark } = context;
				const theme = isLightTheme ? light : dark;
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
						backgroundColor: theme.primary,
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
				return (
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center'
						}}
					>
						<Parallax
							blur={0}
							bgImage={require('../../../assets/heroimage.jpeg')}
							bgImageAlt="the cat"
							style={{ width: '99vw' }}
							strength={500}
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
										<Button href="/menu" variant="contained" style={styles.heroButton}>
											Menu
										</Button>
									</Grid>
								</Grid>
							</Container>
						</Parallax>
					</div>
				);
			}}
		</ThemeContext.Consumer>
	);
};

export default Hero;
