import React from 'react';
import { Paper, Typography, Divider, Button, Hidden } from '@material-ui/core';

const PartyHome = () => {
	return (
		<Paper elevation={20} style={{ display: 'flex', flexDirection: 'row' , width:'70vw', justifyContent:'center'}}>
            <Hidden smDown sm={1}>
			<div style={{ padding:'30px', backgroundColor: 'tomato', }}>
				<img
				src={require('../../../assets/partyhome.jpg')}
					style={{
						width: '600px',
						height: '537px',
						borderRadius: '60px'
					}}
				/>
			</div>
            </Hidden>
			<div style={{display: 'flex' , flexDirection: 'column', flex: 1, backgroundColor: 'tomato', padding: '15px' , justifyContent: 'center' }}>
				<Hidden mdUp>
				<img
				src={require('../../../assets/partyhome.jpg')}
					style={{
						width: '70vw',
						height: 'auto',
						borderRadius: '60px',
					}}
				/>
				</Hidden>
				<Typography variant="h2" style={{ color: 'white' , margin:'20px'}}>
					Party @ Home
				</Typography>
				<br /> 
				<br />
				<Divider style={{ backgroundColor: 'white', }} />
				<br />
				<Typography align="justify" variant="body1" style={{ fontSize: '20px', color: 'white' }}>
					We understand the big things you need to handle while hosting your small party at home. Especially
					when it comes to food. As food is one of the main clinchers for you to make the party a huge
					success. We have you covered there. For home parties with extended family and friends up to 70
					people or for a cozy gathering of 25 people, we are delighted to bring delicious, hot and wholesome
					food at your doorstep.
					<br />
					<br />
					Contact us for the latest offers & pricing.
				</Typography>
				<br />
				<br />
				<Button variant="contained" size="large" style={{ color: 'tomato' }}>
					Contact Us
				</Button>
			</div>
		</Paper>
	);
};

export default PartyHome;
