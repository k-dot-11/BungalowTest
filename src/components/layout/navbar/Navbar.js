import React from 'react';
import { Button, Link, Grid, Card, CardMedia, CardContent, CardActions } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
import Toolbar from '@material-ui/core/Toolbar';
import { ThemeContext } from '../../../contexts/ThemeContext';
const Navbar = () => {
	return (
		<ThemeContext.Consumer>
			{(context) => {
				const { isLightTheme, light, dark } = context;
				const theme = isLightTheme ? light : dark;
				const styles = {
					appBar: {
						display: 'flex',
						backgroundColor: theme.primary,
						flex: 1
					},

					appBarTitle: {
						flex: 1
					},

					cameraIcon: {
						marginRight: '10px'
					},

					navLinks: {
						color: 'white',
						marginLeft: '10px'
					},

					loginButton: {
						marginLeft: '15px',
						borderColor:'white',
						borderWidth: '1/2px',
						borderRadius:'20px',
						color: 'white'
					}
				};
				return (
					<AppBar position="relative" style={styles.appBar}>
						<Toolbar>
							<LocalPizzaIcon style={styles.cameraIcon} />
							<Link href="/" variant="h6" color="inherit" noWrap style={styles.appBarTitle}>
								The Bungalow
							</Link>
							<nav>
								<Button href="/" color="primary" variant="text" style={styles.navLinks}>
									Home
								</Button>
								<Button href="/menu" color="primary" variant="text" style={styles.navLinks}>
									Menu
								</Button>
								<Button
									href="https://www.zomato.com/udaipur/the-bungalow-udaipur-panchwati"
									color="primary"
									variant="text"
									style={styles.navLinks}
								>
									Order Online
								</Button>
								<Button href="/about" color="primary" variant="text" style={styles.navLinks}>
									About
								</Button>
								<Button href="/signin" color="primary" variant="outlined" style={styles.loginButton}>
									Sign in
								</Button>
							</nav>
						</Toolbar>
					</AppBar>
				);
			}}
		</ThemeContext.Consumer>
	);
};

export default Navbar;
