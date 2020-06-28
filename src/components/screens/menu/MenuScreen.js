import React, { useState, useEffect, useContext } from 'react';

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
import { ThemeContext } from '../../../contexts/ThemeContext';
import MenuGrid from '../../layout/menu/MenuGrid';
import FooterBungalow from '../../layout/home/FooterBungalow';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{children}
		</div>
	);
}

const MenuScreen = () => {
	const [ value, setValue ] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	const { isLightTheme, light, dark } = useContext(ThemeContext);
	const theme = isLightTheme ? light : dark;
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				width: '99vw',
				backgroundColor: theme.bg,
				minHeight: 'sm'
			}}
		>
			<AppBar position="static" style={{ backgroundColor: 'tomato' }}>
				<Tabs value={value} onChange={handleChange} centered aria-label="simple tabs example">
					<Tab label="Main Course (Veg)" />
					<Tab label="Beverages" />
					<Tab label="Starters" />
					<Tab label="Breads" />
					<Tab label="Desserts" />
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0}>
				<MenuGrid name="MainCourse" image="curry" />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<MenuGrid name="Bar" image="drinks" />
			</TabPanel>
			<TabPanel value={value} index={2}>
				<MenuGrid name="Starters" image="salad" />
			</TabPanel>
			<TabPanel value={value} index={3}>
				<MenuGrid name="Breads" image="chapati" />
			</TabPanel>
			<TabPanel value={value} index={4}>
				<MenuGrid name="Desserts" image="dessert" />
			</TabPanel>
			<FooterBungalow />
		</div>
	);
};

export default MenuScreen;
