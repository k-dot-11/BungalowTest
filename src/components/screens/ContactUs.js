import React, { useContext } from 'react';
import { Paper, Container, Typography, Hidden, Divider } from '@material-ui/core';
import { ThemeContext } from '../../contexts/ThemeContext';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Link } from '@material-ui/core';
import FooterBungalow from '../layout/home/FooterBungalow';

const ContactUs = () => {
	const { isLightTheme, dark, light } = useContext(ThemeContext);
	const theme = isLightTheme ? light : dark;
	return (
		<div
			style={{
				width: '100vw',
				height: 'auto',
				display: 'flex',
				flexDirection: 'column',
				backgroundColor: theme.bg
			}}
		>
			<br />
			<br />
			<Paper
				style={{
					alignSelf: 'center',
					backgroundColor: theme.primary,
					height: 'auto',
					width: '76vw',
					display: 'flex',
					padding: '2vw'
				}}
			>
				<Hidden smDown>
					<div style={{ flex: 1, alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
						<Typography variant="h4" align="center" style={{ color: 'white' }}>
							Get in touch !
							<br />
						</Typography>
						<br />

						<img
							src={require('../../assets/contactus.jpg')}
							style={{ height: 'auto', width: '30vw', borderRadius: '40px' }}
						/>
					</div>
				</Hidden>
				<div style={{ flex: 1, alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
					<Hidden mdUp>
						<br />
						<Typography variant="h4" align="center" style={{ color: 'white' }}>
							Get in touch !
							<br />
						</Typography>
						<br />
						<br />

						<img
							src={require('../../assets/contactus.jpg')}
							style={{ height: 'auto', width: '65vw', borderRadius: '40px' }}
						/>
					</Hidden>
					<br />
					<br />
					<Typography variant="h4" align="center" style={{ color: 'white' }}>
						Contact Details
					</Typography>
					<Divider style={{ backgroundColor: 'white', width: '28vw', margin: '20px' }} />
					<Typography variant="h5" align="center" style={{ color: 'white' }}>
						0294-2422725 / 0294-2422726
					</Typography>
					<br />
					<Typography align="center" style={{ color: 'white', fontSize: '18px' }}>
						170A, New Fatehpura, Udaipur(Raj.)
					</Typography>
					<br />
					<Typography align="center" style={{ color: 'white', fontSize: '18px' }}>
						thebungalowudaipur@gmail.com
					</Typography>
					<br />
					<Typography align="center" style={{ color: 'white', fontSize: '18px' }}>
						11:00 AM to 10:30 PM
					</Typography>
					<br />
					<Typography align="center" style={{ color: 'white', fontSize: '20px' }}>
						<Link href="https://www.facebook.com/thebungalowudaipur/">
							{<FacebookIcon fontSize='large' align="center" style={{color:'white', margin:'10px'  }} />}
						</Link>
						<Link href="https://www.instagram.com/thebungalowudaipur/">
							<InstagramIcon  fontSize='large' align="center"  style={{color:'white', margin:'10px'}} />
						</Link>
						<Link href="https://twitter.com/UdaipurBungalow">
							<TwitterIcon align="center"  fontSize='large' style={{color:'white', margin:'10px'}}/>
						</Link>
					</Typography>
				</div>
			</Paper>
			<br />
			<br />
			<br />
			<br />

			<FooterBungalow />
		</div>
	);
};

export default ContactUs;
