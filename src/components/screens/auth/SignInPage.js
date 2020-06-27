import React, { useState } from 'react';
import {
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
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import LockIcon from '@material-ui/icons/Lock';
import { auth } from '../../../firebase/firebase';

const SignInPage = () => {
	const [ rememberCheckBox, setRememberCheck ] = useState(false);

	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const signInWithEmailAndPasswordHandler = () => {
			console.log(email + ' ' +  password)
		try {
			auth.createUserWithEmailAndPassword(email, password).then((data) => {
				console.log(data)
			});
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div
			style={{
				backgroundColor: 'white',
				display: 'flex'
			}}
		>
			<Container maxWidth="xs" component="main" style={styles.mainContainer}>
				<CssBaseline />
				<Avatar style={styles.avatar} size="large">
					<LockIcon />
				</Avatar>
				<Typography variant="h4" style={styles.headingSignIn}>
					Sign In
				</Typography>
				<form noValidate autoComplete="off" style={{ width: '40vh', display: 'flex', flexDirection: 'column' }}>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						value={email}
						autoComplete="email"
						autoFocus
						onChange={(text) => {
							setEmail(text.target.value.toString());
							console.log(text.target.value)
						}}
						style={styles.formTextField}
					/>
					<TextField
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						value={password}
						autoComplete="current-password"
						variant="outlined"
						onChange={(text) => {
							setPassword(text.target.value);
						}}
						style={styles.formTextField}
					/>
					<FormControlLabel
						control={
							<Checkbox
								checked={rememberCheckBox}
								onChange={() => {
									setRememberCheck(!rememberCheckBox);
								}}
								color="primary"
							/>
						}
						label="Remember me"
					/>
					<Button
						fullWidth
						variant="contained"
						color="primary"
						onClick={signInWithEmailAndPasswordHandler}
						style={styles.loginButton}
					>
						Log In
					</Button>
					<Button
						fullWidth
						color="primary"
						variant="contained"
						style={{ marginBottom: '20px' }}
						href="/signup"
					>
						{'Sign Up'}
					</Button>
					<Button size="small" href="#" color="primary" variant="outlined">
						Forgot password?
					</Button>
				</form>

				<Typography color="textSecondary" style={{ marginTop: '100px' }}>
					Copyright © The Bungalow 2020.
				</Typography>
			</Container>
		</div>
	);
};

const styles = {
	mainContainer: {
		display: 'flex',
		flexDirection: 'column',
		flex: 1,
		marginTop: '70px',
		backgroundColor: 'white',
		alignItems: 'center',
		height: '100vh'
	},
	headingSignIn: {
		marginBottom: '40px'
	},
	avatar: {
		backgroundColor: 'tomato',
		height: '60px',
		marginBottom: '20px',
		width: '60px'
	},
	formTextField: {
		marginBottom: '30px'
	},
	loginButton: { marginTop: '20px', marginBottom: '20px', backgroundColor: 'tomato' }
};

export default SignInPage;
