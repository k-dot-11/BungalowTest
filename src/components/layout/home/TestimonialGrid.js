import React, { useContext } from 'react';
import { Grid, Paper, Avatar, Typography } from '@material-ui/core';
import { ThemeContext } from '../../../contexts/ThemeContext';

const TestimonialGrid = () => {
	const cards = [ 'KS' , 'MD', 'PS' ];
	const { isLightTheme, light, dark } = useContext(ThemeContext);
	const theme = isLightTheme ? light : dark;
	return (
		<Grid container spacing={1} style={{alignSelf:'center',width:'90vw', margin: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
			{cards.map((card) => (
				<Grid item key={card} xs={12} sm={6} md={2}>
					<Paper
						style={{
							backgroundColor: theme.paper,
							padding: '20px',
							margin: '20px',
							
						}}
					>
						<Typography style={{ color: theme.syntax }}>
							For a vegetarian buffet Lunch I think this is one of the best places. The service is also
							very impressive
						</Typography>
						<div>
							<Avatar
								style={{
									backgroundColor: theme.primary,
									margin: '10px'
								}}
							>
								{card}
							</Avatar>
						</div>
					</Paper>
				</Grid>
			))}
		</Grid>
	);
};

export default TestimonialGrid;
