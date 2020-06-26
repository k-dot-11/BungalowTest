import React, { useEffect } from 'react';
import { Button, Link, Grid, Card, CardMedia, CardContent, CardActions } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/screens/HomePage';
import SignInPage from './components/screens/auth/SignInPage';
import SignUpPage from './components/screens/auth/SignUpPage';
import UserProvider from './providers/UserProvider';
import { auth } from './firebase/firebase';

function App() {
	useEffect(() => {
		auth.onAuthStateChanged((userAuth) => {
			this.setState({ user: userAuth });
		});
	}, []);

	return (
		<UserProvider>
			<Router>
				<div className="App" style={{ display: 'flex', flexDirection: 'column' }}>
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
								<Button href="/" color="primary" variant="text" style={styles.navLinks}>
									Menu
								</Button>
								<Button href="#" color="primary" variant="text" style={styles.navLinks}>
									Order Online
								</Button>
								<Button href="#" color="primary" variant="text" style={styles.navLinks}>
									About
								</Button>
								<Button href="/signin" color="white" variant="outlined" style={styles.loginButton}>
									Sign in
								</Button>
							</nav>
						</Toolbar>
					</AppBar>
					<Switch>
						<Route path="/signin">
							<SignInPage />
						</Route>
						<Route path="/signup">
							<SignUpPage />
						</Route>

						<Route path="/">
							<HomePage />
						</Route>
					</Switch>
				</div>
			</Router>
		</UserProvider>
	);
}

const styles = {
	appBar: {
		display: 'flex',
		backgroundColor: 'tomato',
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
		color: 'white'
	}
};

export default App;
