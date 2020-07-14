import React from 'react';
import { Container, Paper, Hidden, Typography, Box } from '@material-ui/core';

const NewParty = () => {
	return (
		<Container maxWidth="lg" style={{ backgroundColor: 'tomato', display: 'flex', flexDirection: 'column' }}>
			<br />

			<div style={{ display: 'flex', flexDirection: 'row', flex: 1, height: '50vh', justifyContent: 'center' }}>
				<Hidden smDown>
                    <div style={{flex:1}}>
					<img
						className="img-party"
						style={{
							top: '50%',
							left: '50%',
							margin: '22px',
							width: '30vw',
							borderRadius: '50px',
							height: '48vh'
						}}
						src={require('../../../assets/party.png')}
					/>
                </div>

				</Hidden>
				<Box
					style={{
						flex: 1,
						margin: '20px',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center'
					}}
				>
					<Typography style={{ color: 'white' }} variant="h2" align="center">
						Small Parties
					</Typography>
					<Typography style={{ color: 'white',fontSize:'18px' }} variant="subtitle1" align="justify">
						<br />
						<br />
						For home parties with extended family and friends upto 70 people or for a cosy gathering of 25
						people, we are delighted to bring delicious, hot and wholesome food at your doorstep.
					</Typography>
				</Box>
			</div>
			<br />
			<br />
			<div style={{ display: 'flex', flexDirection: 'row', flex: 1, height: '50vh', justifyContent: 'center' }}>
            <Box
					style={{
						flex: 1,
						margin: '20px',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center'
					}}
				>
					<Typography style={{ color: 'white'}} variant="h2" align="center">
						Reserve A Table
					</Typography>
					<Typography style={{ color: 'white',fontSize:'18px'}} variant="subtitle1" align="justify">
						<br />
						<br />
						For home parties with extended family and friends upto 70 people or for a cosy gathering of 25
						people, we are delighted to bring delicious, hot and wholesome food at your doorstep.
					</Typography>
				</Box>
				<Hidden smDown>
					<img
						className="img-party"
						style={{
							flex: 1,
							top: '50%',
							left: '50%',
							margin: '20px',
							width: '22vw',
							borderRadius: '50px',
							height: '48vh'
						}}
						src={require('../../../assets/catering.png')}
					/>
				</Hidden>
			</div>
			<br />
		</Container>
	);
};

export default NewParty;
