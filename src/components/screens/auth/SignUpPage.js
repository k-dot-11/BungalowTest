import React , {useState} from 'react';
import {
	Paper,
	Container,
	Typography,
	Avatar,
	CssBaseline,
	TextField,
	Checkbox,
	FormControlLabel,
	Button,
	Grid,
	Link
} from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';

const SignUpPage = () => {

	const [email , setEmail] = useState('');
	const [password , setPassword] = useState('');

	return (
		<Grid container component="main" style={{ height: '100vh' }}>
			<Grid item xs={false} sm={4} md={7} style={styles.sideImage} />
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
				<div style={{ backgroundColor: 'white', display: 'flex', marginTop: '100px' }}>
					<Container maxWidth="xs" component="main" style={styles.mainContainer}>
						<CssBaseline />
						<Avatar style={styles.avatar} size="large">
							<LockIcon />
						</Avatar>
						<Typography variant="h4" style={styles.headingSignIn}>
							Sign Up
						</Typography>
						<form
							noValidate
							autoComplete="off"
							style={{ width: '40vh', display: 'flex', flexDirection: 'column' }}
						>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								id="email"
								label="Name"
								name="name"
								autoComplete="name"
								autoFocus
								style={styles.formTextField}
							/>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
								style={styles.formTextField}
							/>
							<TextField
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="current-password"
								variant="outlined"
								style={styles.formTextField}
							/>
							<TextField
								required
								fullWidth
								name="confirmPassword"
								label="Confirm Password"
								type="password"
								id="confirmpass"
								autoComplete="current-password"
								variant="outlined"
								style={styles.formTextField}
							/>

							<Button
								fullWidth
								color="primary"
								variant="contained"
								style={{ marginBottom: '20px' }}
								href="/signup"
							>
								{'Sign Up'}
							</Button>
						</form>

						<Typography color="textSecondary" style={{ marginTop: '100px' }}>
							Copyright © The Bungalow 2020.
						</Typography>
					</Container>
				</div>
			</Grid>
		</Grid>
	);
};

const styles = {
	mainContainer: {
		display: 'flex',
		flexDirection: 'column',
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
		height: '100vh'
	},
	sideImage: {
		backgroundImage: 'url(https://source.unsplash.com/1600x900/?restaurant)',
		backgroundSize: 'cover',
		backgroundPosition: 'center'
	},
	formTextField: {
		marginBottom: '30px'
	},
	headingSignIn: {
		marginBottom: '40px'
	},
	avatar: {
		backgroundColor: 'tomato',
		height: '60px',
		marginBottom: '20px',
		width: '60px'
	}
};

export default SignUpPage;
