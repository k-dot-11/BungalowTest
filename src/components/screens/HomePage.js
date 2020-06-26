import React from 'react';
import {
	Button,
	Link,
	Grid,
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Container,
	Paper,
	Avatar
} from '@material-ui/core';
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
import Typography from '@material-ui/core/Typography';
import { Slide } from 'react-slideshow-image';

import Hero from '../layout/home/Hero';
import OdeToFood from '../layout/home/OdeToFood';
import OrderOnlineHome from '../layout/home/OrderOnlineHome';
import ImageSlider from '../layout/home/ImageSlider';
import PartyAndCatering from '../layout/home/PartyAndCatering';
import FooterBungalow from '../layout/home/FooterBungalow';
import { ThemeContext } from '../../contexts/ThemeContext';

const HomePage = () => {
	
	return (
		<ThemeContext.Consumer>
			{(context) => {
				const { isLightTheme, light, dark } = context;
				const theme = isLightTheme ? light : dark;
			
				return (
					<div style={{display: 'flex' , flexDirection: 'column'}}>
						<Hero />

						<OdeToFood />

						<div
							style={{
								backgroundColor: theme.bg,
								paddingTop: '40px',
								alignItems: 'center',
								justifyContent: 'center',
								display: 'flex',
								flexDirection: 'column'
							}}
						>
							<OrderOnlineHome />

							<ImageSlider />

							<PartyAndCatering />

							<div
								style={{
									marginTop: '67px',
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center'
								}}
							>
								<Typography variant="h2" align="center" style={{ color: 'tomato' }}>
									Testimonials
								</Typography>
								<Typography variant="subtitle2" style={{  color: theme.syntax }}>
									<br />
									<br />
									The love and the kind words of appreciation is really the secret ingredient of our
									success and the key reason for us to comeback.
								</Typography>
								<div
									style={{
										display: 'flex',
										flexDirection: 'row',
										width: '55vw',
										margin: '20px',
										marginBottom: '30px'
									}}
								>
									<Paper style={{ backgroundColor: theme.paper, padding: '20px', margin: '20px' }}>
										<Typography style={{ color: theme.syntax }}>
											For a vegetarian buffet Lunch I think this is one of the best places. The
											services is also very impressive
										</Typography>
										<div>
											<Avatar style={{ backgroundColor: 'tomato', margin: '10px' }}>KS</Avatar>
										</div>
									</Paper>
									<Paper style={{ backgroundColor: theme.paper, padding: '20px', margin: '20px' }}>
										<Typography style={{  color: theme.syntax }}>
											For a vegetarian buffet Lunch I think this is one of the best places. The
											services is also very impressive
										</Typography>
										<div>
											<Avatar style={{ backgroundColor: 'tomato', margin: '10px' }}>MD</Avatar>
										</div>
									</Paper>
									<Paper style={{ backgroundColor: theme.paper, padding: '20px', margin: '20px' }}>
										<Typography style={{ color: theme.syntax }}>
											For a vegetarian buffet Lunch I think this is one of the best places. The
											services is also very impressive
										</Typography>
										<div>
											<Avatar style={{ backgroundColor: 'tomato', margin: '10px' }}>PS</Avatar>
										</div>
									</Paper>
								</div>
							</div>
						</div>
						<FooterBungalow />
					</div>
				);
			}}
		</ThemeContext.Consumer>
	);
};

const styles = {
	heroTitle: {
		color: 'white'
	},

	heroButtons: {
		padding: '20px'
	},

	heroButton: {
		marginRight: '10px',
		marginLeft: '10px',
		backgroundColor: 'tomato',
		color: 'white'
	},
	cardMedia: {
		paddingTop: '56.25%' // 16:9
	},
	socialIcon: {
		color: 'white',
		margin: '10px'
	}
};

export default HomePage;

{
	/* {	<Grid container>
					{cards.map((card) => (
						<Grid item key={card} xs={8} sm={6} md={3}>
							<Card style={{ margin: '15px', backgroundColor: '#444444' }}>
								<CardMedia
									image="https://source.unsplash.com/1600x900/?restaurant"
									title="Image title"
									style={styles.cardMedia}
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2" style={{ color: 'white' }}>
										Heading
									</Typography>
									<Typography style={{ color: 'lightgrey' }}>
										This is a media card. You can use this section to describe the content.
									</Typography>
								</CardContent>
								<CardActions>
									<Button size="small" color="secondary">
										View
									</Button>
									<Button size="small" color="secondary">
										Edit
									</Button>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid> } */
}
