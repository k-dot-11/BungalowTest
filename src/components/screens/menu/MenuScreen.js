import React, { useState, useEffect } from 'react';
import {
	Grid,
	Card,
	CardContent,
	Typography,
	Button,
	Container,
	CardActions,
    CardMedia,
    Tabs,
    Tab,
    AppBar,
	CircularProgress
} from '@material-ui/core';
import { firestore } from '../../../firebase/firebase';

const MenuScreen = () => {
	const cards = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

	const [ menuItems, setMenuItems ] = useState([]);
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		const subscriber = firestore
			.collection('menuData')
			.doc('MainCourse')
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

	if (loading) return <CircularProgress />;

	return (
		<Container maxWidth="md">
			<Grid container spacing={4} style = {{marginTop:'30px'}}>
				{menuItems.map((item) => (
					<Grid item key={item.name} xs={12} sm={6} md={4}>
						<Card elevation={5} style = {{padding:'10px' , backgroundColor:'#fefefe'}}>
							<CardMedia
								image="https://source.unsplash.com/1920x1080/?curry"
								title="Image title"
								style={{ paddingTop: '56.25%' }}
							/>
							<CardContent>
								<Typography style={{ color: 'tomato' }} gutterBottom variant="h5" component="h2">
									{item.name}
								</Typography>
								<Typography style={{ color: 'green' }}>
									{item.price}
									<br />
								</Typography>
								<Typography>{item.description}</Typography>
							</CardContent>
							<CardActions>
								<Button size="small" color="primary">
									View
								</Button>
								<Button size="small" color="primary">
									Edit
								</Button>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default MenuScreen;
