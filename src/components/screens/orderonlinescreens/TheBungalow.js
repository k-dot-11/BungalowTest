import React,{useContext} from 'react';
import { Grid, Typography, Button, Hidden } from '@material-ui/core';
import { Link } from 'react-router-dom';
import FooterBungalow from '../../layout/home/FooterBungalow';
import { ThemeContext } from '../../../contexts/ThemeContext';
const TheBungalow = () => {

  const {isLightTheme ,dark , light} = useContext(ThemeContext)
  const theme = isLightTheme? light : dark;

	return (
		<div
			style={{
				// flex: "1",
				// height: "100%",
				// alignItems: "center",
				// justifyContent: "center",
			}}
		>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
			<Grid container alignItems="center" justifyContent="center" spacing={2} style={{backgroundColor:theme.bg}}>
				<Grid item xs={12}>
					<img
						style={{
							display: 'block',
							marginLeft: 'auto',
							marginRight: 'auto',
							marginBottom: '20px'
						}}
						height="110px"
						width="110px"
						src={require('../../../assets/rocket.png')}
					/>
				</Grid>
				<Grid item xs={12}>
					<Hidden smDown>
						<Typography variant="h1" align="center" style={{ color: 'tomato', fontWeight: '400' }}>
							COMING SOON !
						</Typography>
					</Hidden>{' '}
					<Hidden mdUp>
						<Typography variant="h2" align="center" style={{ color: 'tomato', fontWeight: '500' }}>
							COMING SOON !
						</Typography>
					</Hidden>
				</Grid>
				<Grid item xs={12}>
					<Typography align="center" variant="h5" style={{color:theme.syntax}}>
						We are almost there! This section is under construction. <br />
						Come back later to view this section!
					</Typography>
          <Hidden mdDown><br/><br/><br/><br/></Hidden>  
				</Grid>
        <Hidden mdDown><br/><br/><br/><br/></Hidden>
				<Grid
					item
					style={{
						textAlign: 'center'
					}}
					xs={12}
				>
					<Button
						style={{
							margin: '2%',
              color: 'white',

							backgroundColor: theme.primary,
						}}
						variant="contained"
						component="span"
					>
						<Link style={{ color: 'white', textDecoration: 'none' }} to="/">
							GO TO HOME
						</Link>
					</Button>

					<Button
						style={{
              margin: '2%', 
							color: 'white',
							backgroundColor: theme.primary,
						}}
						variant="contained"
						component="span"
					>
						<Link style={{ color: 'white ', textDecoration: 'none' }} to="/menu">
							CHECK MENU
						</Link>
					</Button>
				</Grid>
			</Grid>
      <br/>
      <br/>

			<FooterBungalow />
		</div>
	);
};
export default TheBungalow;
