import React from 'react';
import {Container , Typography , Paper} from '@material-ui/core';
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';

const OdeToFood = () => {
    return (
        <div style={{ backgroundColor: '#121212', padding: '15px' }}>
				<Container style={{ flex: 10, paddingRight: '20px', paddingLeft: '20px' }} maxWidth="md">
					<Paper elevation={3} style={{ backgroundColor: 'tomato', padding: '60px' }}>
						<Typography variant="body1" style={{ color: 'white' }} gutterBottom align="center">
							The award winning vegetarian restaurant that you cherished for long is now back in an all
							new format, delivering deliciousness directly to your doorstep. Come, join us as we continue
							to celebrate this ode to food.
							<br />
							<br />
							__________________
						</Typography>
						<Typography
							variant="h3"
							style={{ color: 'white', fontWeight: 'bold' }}
							component="h2"
							align="center"
						>
							An Ode to Food
							<br />
							<LocalPizzaIcon align="center" />
							<br />
							<br />
						</Typography>
						<Typography
							variant="h5"
							style={{ color: 'white', fontStyle: 'italic' }}
							component="p"
							align="center"
						>
							The Colours of festivity, the sounds of joy, the flowers of friendship topped with the
							irresistable taste of authentic vegetarian delicacies You are invited to savour the
							experience with all your senses With family and friends, day after day & Make life a
							celebration!
						</Typography>
					</Paper>
				</Container>
			</div>
    )
}

export default OdeToFood
