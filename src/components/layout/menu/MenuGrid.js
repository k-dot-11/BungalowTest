import React, { useState, useEffect, useContext } from 'react';
import {
	Grid,
	Card,
	CircularProgress,
	CardContent,
	CardActions,
	CardMedia,
	Typography,
	Button,
	Container
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FooterBungalow from '../home/FooterBungalow';
import { firestore } from '../../../firebase/firebase';
import { ThemeContext } from '../../../contexts/ThemeContext';
import { PacmanLoader, HashLoader, ClimbingBoxLoader } from 'react-spinners';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

const MenuGrid = (props) => {
	const { isLightTheme, light, dark } = useContext(ThemeContext);
	const theme = isLightTheme ? light : dark;

	const [ menuItems, setMenuItems ] = useState([]);
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		const subscriber = firestore
			.collection('menuData')
			.doc(props.name)
			.collection('items')
			.onSnapshot((querySnapshot) => {
				const units = [];

				querySnapshot.forEach((documentSnapshot) => {
					units.push({
						...documentSnapshot.data(),
						key: documentSnapshot.id
					});
				});

				setMenuItems(units);
				setLoading(false);
			});

		return () => subscriber();
	}, []);

	if (loading)
		return (
			<Container
				maxWidth="md"
				minHeight="100vh"
				style={{
					height: '100vh',
					alignItems: 'center',
					justifyContent: 'center',
					display: 'flex',
					backgroundColor: theme.bg,
					marginBottom: '20px'
				}}
			>
				<ClimbingBoxLoader color={'tomato'} />
			</Container>
		);
	return (
		<Container maxWidth="md" minHeight="100vh" style={{ backgroundColor: theme.bg, marginBottom: '20px' }}>
			<Grid container spacing={4} style={{ marginTop: '30px', alignItems: 'stretch' }}>
				{menuItems.map((item) => (
					<Grid item key={item.name} xs={12} sm={6} md={4}>
						<Card
							elevation={5}
							style={{
								padding: '10px',
								backgroundColor: theme.paper
							}}
						>
							<CardMedia
								image={'https://source.unsplash.com/1920x1080/?' + props.image}
								title="Image title"
								style={{ paddingTop: '56.25%' }}
							/>
							<CardContent>
								<Typography style={{ color: 'tomato' , fontSize:'19px'}} gutterBottom variant="body1" component="h2">
									{item.name}
								</Typography>
								<Typography style={{ color: 'green', fontWeight: 'bold' }}>
									Rs. {item.price}
									<br />
								</Typography>

								<Accordion style={{backgroundColor:theme.paper  }} elevation={0}>
									<AccordionSummary
										expandIcon={<ExpandMoreIcon />}
										aria-controls="panel2a-content"
										id="panel2a-header"
									>
										<Typography variant='body1' style={{color:theme.syntax}}>Description</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<Typography>
										{item.description}
										</Typography>
									</AccordionDetails>
								</Accordion>
							</CardContent>
							<CardActions>
								<Button size="small" color="primary">
									View
								</Button>
								<Button disabled size="small" color="primary">
									Add to cart
								</Button>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default MenuGrid;
