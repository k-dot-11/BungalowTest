import React, { useContext } from 'react';
import { Button, Link, Grid, Card, CardMedia, CardContent, CardActions } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
import Toolbar from '@material-ui/core/Toolbar';
import { ThemeContext } from '../../../contexts/ThemeContext';
import { UserContext } from '../../../providers/UserProvider';
import { auth } from '../../../firebase/firebase';

const Navbar = () => {
	const user = useContext(UserContext);
	console.log(user);
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
						textAlign: 'left',
						marginRight: '62vw'
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
						borderColor: 'white',
						borderWidth: '1/2px',
						borderRadius: '20px',
						color: 'white'
					}
				};
				return (
					<AppBar position="relative" style={styles.appBar}>
						<Toolbar>
							<LocalPizzaIcon style={styles.cameraIcon} />
							<Button href="/" variant="text" color="inherit" noWrap style={styles.appBarTitle}>
								The Bungalow
							</Button>
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
								<Button
									href="/signin"
									onClick={() => {
										user
											? auth.signOut().then(() => console.log('User signed out!'))
											: console.log('Going to signin page');
									}}
									color="primary"
									variant="outlined"
									style={styles.loginButton}
								>
									{user ? 'Sign Out' : 'Sign In'}
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
